<template>
  <el-container class="common-layout">
    <el-header class="header_top">
      <div class="top-left">顶部导航</div>
      <div class="top-right">
        <div v-if="centerArr.length" @click="visible = true"><van-icon name="eye-o" />预览</div>
      </div>
    </el-header>
    <el-container class="container_main">
      <el-aside class="aside_left">
        <leftCont :componentsArr="componentsArr" @toItem="toItem"></leftCont>
      </el-aside>
      <el-main class="main_content">
        <div class="box-card">
          <div class="phone_h5" ref="refH5">
            <centerCont :centerArr="centerArr" v-model:isActive="isActive"></centerCont>
          </div>
          <div class="h5_right">
            <van-icon name="arrow-up" size="22" class="ups" @click="changeCompont('up')" />
            <van-icon name="arrow-down" size="22" class="downs" @click="changeCompont('down')" />
            <van-icon name="delete-o" size="22" class="deletes" @click="changeCompont('delete')" />
          </div>
        </div>
      </el-main>
      <el-aside class="aside_right">
        <rightCont :centerArr="centerArr" v-model:isActive="isActive"></rightCont>
      </el-aside>
    </el-container>
  </el-container>
  <div class="backVisible" v-if="visible">
    <div class="h5-cont">
      <van-icon class="closed" name="cross" @click="closed" />
      <div class="phone_h5_2">
        <centerCont :centerArr="centerArr"></centerCont>
      </div>
    </div>
    <el-button type="primary" class="primary" @click="toHtml">导出html</el-button>
  </div>
</template>

<script>
import { ref, toRefs, reactive,nextTick } from 'vue'
import { generateCode } from '../utils/export'
export default {
  name: 'index',
  setup () {
    const refH5 = ref(null)
    const data = reactive({
      componentsArr: [
        {
          id: 1,
          name: '输入框',
          isDisable: false,
          el: 'centerInput',
          node: 'input',
          editEl: 'inputEdit',
          props: {
            inputVal: '',
            labelVal: '文本',
            labelAlign: 'center',
            labelWidth: '40px',
            inputAlign: 'center',
            placeholder: '请输入用户名',
            type: 'text',
            showError: false,
            isShowbtn: true,
            btnName: '发送验证码',
            color: '#1989fa'
          }
        },
        {
          id: 2,
          name: '头部',
          isDisable: false,
          el: 'centerTop',
          node: 'top',
          editEl: 'topEdit',
          props: {
            isShowIcon: false,
            leftIconUrl: 'https://fastly.jsdelivr.net/npm/@vant/assets/user-active.png',
            searchval: '',
            placeholder: '请输入搜索关键词',
            showBtn: true,
            btnName: '取消',
            rightIconUrl: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
          }
        },
        {
          id: 3,
          name: '轮播',
          isDisable: false,
          el: 'centerSwiper',
          node: 'swiper',
          editEl: 'swiperEdit',
          props: {
            showIndicators:false,
            images:[
              {url:'https://fastly.jsdelivr.net/npm/@vant/assets/apple-5.jpeg',desc:'111111'},
              {url:'https://fastly.jsdelivr.net/npm/@vant/assets/apple-6.jpeg',desc:'2222222'},
              {url:'https://fastly.jsdelivr.net/npm/@vant/assets/apple-7.jpeg',desc:'33333'},
            ]
          }
        },
        {
          id: 4,
          name: '图片',
          isDisable: false,
          el: 'centerUploader',
          node: 'uploader',
          editEl: 'uploaderEdit',
          props: {
            fileList: [
              { url: 'https://fastly.jsdelivr.net/npm/@vant/assets/leaf.jpeg' },
              { url: 'https://fastly.jsdelivr.net/npm/@vant/assets/tree.jpeg', isImage: true }
            ],
            previewSize: '110px',
            fullImage: false
          }
        }
      ],
      centerArr: [],
      isActive: 0,
      visible: false
    })
    const toItem = item => {
      let newData = JSON.parse(JSON.stringify(item))
      newData.key = data.centerArr.length
      data.centerArr.push(newData)
      //data.centerArr.push(item) 注释，上面代码可以复制数据一份防着数据相互污染
      data.isActive = data.centerArr.length - 1
      nextTick(() => {
        refH5.value.scrollTop = refH5.value.scrollHeight
      })
    }
    const changeCompont = type => {
      switch (type) {
        case 'up' :
          if(data.isActive < 1) {
            console.log('已经是第一个了')
            return
          }
          data.centerArr.splice(
            data.isActive - 1, 1,
            ...data.centerArr.splice(
              data.isActive, 1,
              data.centerArr[data.isActive -1]
            )
          )
          data.isActive -= 1;
        break;
        case 'down':
          if(data.isActive + 1 === data.centerArr.length){
            console.log('已经是最后一个了')
            return
          }
          data.centerArr.splice(
            data.isActive, 1,
            ...data.centerArr.splice(
              data.isActive + 1, 1,
              data.centerArr[data.isActive]
            )
          )
          data.isActive += 1;
        break;
        case 'delete':
          data.centerArr.splice(data.isActive,1);
          data.isActive===0?0:data.isActive -= 1;
        break;
      }
    }
    const closed = () => {
      data.visible = false
    }
    const toHtml = async () => {
      await generateCode(data.centerArr)
      const link = document.createElement("a");
      link.download = "index.html"; // 文件名
      link.style.display = "none";
      const blob = new Blob([data.centerArr], { type: 'text/plain;charset=utf-8' });
      link.href = window.URL.createObjectURL(blob);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      console.log(data.centerArr)
    }
    return {
      ...toRefs(data),
      toItem,
      refH5,
      changeCompont,
      closed,
      toHtml
    }
  }
}
</script>
<style scoped>
.common-layout {
  width: 100%;
  height: 100vh;
}
.header_top{
  width: 100%;
  min-width: 1150px;
  height: 80px;
  line-height: 80px;
  /* background:linear-gradient(150deg,red 12.5%,rgb(252, 117, 140) 25%,rgb(245, 209, 5) 20%,green 37.5%,indigo 50%,blue 62.5%,orange 75%,brown 87.5%,violet 100%); */
  background: #f168d3;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
.top-left{
  width: 100%;
  height: 40px;
}
.top-right{
  width: 50%;
  line-height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  font-size: 14px;
  color: rgb(183, 0, 255);
}
.top-right div{
  cursor: pointer;
}
.top-right div:hover{
  font-size: 15px;
}
.container_main{
  width: 100%;
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.aside_left,.aside_right{
  width: 350px;
  height: calc(100vh - 80px);
}
.main_content{
  min-width: 375px;
  border-left: dashed 1px rgb(212, 210, 210);
  border-right: dashed 1px rgb(212, 210, 210);
  display: flex;
  justify-content: center;
  flex-shrink: 0;
}
.box-card {
  width: calc(100% - 900px);
  height: calc(100vh - 100px);
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.phone_h5{
  width: 375px;
  border: dashed 1.5px #68adf1;
  flex-shrink: 0;
  border-radius: 8px;
  overflow-y: auto;
}
.phone_h5_2{
  width: 375px;
  height: 80vh;
  border: dashed 1.5px #68adf1;
  flex-shrink: 0;
  border-radius: 8px;
  overflow-y: auto;
}
.h5_right{
  width: 40px;
  height: 120px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}
.downs{
  margin: 8px 0;
}
.downs:hover,.ups:hover,.deletes:hover{
  transform: scale(1.2);
}
.el-main{
  padding: 10px !important;
}
.backVisible{
  width: 100%;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background: #fff;
  overflow: hidden;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.h5-cont{
  width: 450px;
  height: 90vh;
  flex-shrink: 0;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.closed{
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
}
.primary{
  margin-top: 5px;
}
</style>