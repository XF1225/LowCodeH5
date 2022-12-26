<template>
  <el-container class="common-layout">
    <el-header class="header_top">顶部导航</el-header>
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
</template>

<script>
import { ref, toRefs, reactive,nextTick } from 'vue'
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
            src: ''
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
            src: ''
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
            src: ''
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
            src: ''
          }
        }
      ],
      centerArr: [],
      isActive: 0
    })
    const toItem = item => {
      data.centerArr.push(item)
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
          data.isActive -= 1;
        break;
      }
    }
    return {
      ...toRefs(data),
      toItem,
      refH5,
      changeCompont
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
  background: green;
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
</style>