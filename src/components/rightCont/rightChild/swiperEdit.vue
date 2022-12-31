<template>
  <div>
    <van-collapse v-model="activeNames">
      <van-collapse-item title="基本属性" name="1">
        <div v-for="(item,index) of rightData.props.images" :key="index">
          <van-cell-group inset>
            <van-field v-model="item.url" center label="替换图片">
            </van-field>
          </van-cell-group>
          <el-input v-model="item.desc" placeholder="Please input" />
        </div>
        <div class="addItem">
          <span>添加或删除一项</span>
          <div class="add" @click="addItem">+</div>
          <div v-if="rightData.props.images.length > 1" class="remove" @click="removeItem">-</div>
        </div>
      </van-collapse-item>
      <van-collapse-item title="其他属性" name="2">
        在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。
      </van-collapse-item>
    </van-collapse>
  </div>
</template>

<script>
import { toRefs, reactive } from 'vue'
export default {
  name: 'swiperEdit',
  props: {
    rightData:Object
  },
  emits: ['update:rightData'],
  setup (props,{emit}) {
    const data = reactive({
      activeNames: ['1', '2']
    })
    const addItem = () => {
      let rightData = props.rightData
      let item = rightData.props.images[rightData.props.images.length - 1]
      rightData.props.images.push({
        url:item.url,
        desc: '666'
      })
      emit('update:rightData',rightData)
    }
    const removeItem = () => {
      let rightData = props.rightData
      rightData.props.images.splice(rightData.props.images.length - 1,1)
      emit('update:rightData',rightData)
    }
    return {
      ...toRefs(data),
      addItem,
      removeItem
    }
  }
}
</script>

<style scoped>
:deep().van-cell-group--inset{
  margin: 0 !important;
}
:deep().van-cell{
  padding: 10px 0 !important;
}
:deep().van-field__label{
  width: 70px;
}
.van-collapse-item{
  padding: 0 10px;
}
.addItem{
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
}
.addItem span {
  margin-right: 10px;
  color: black;
}
.add,.remove{
  width: 18px;
  height: 18px;
  line-height: 18px;
  text-align: center;
  border: solid 1px #6b89ec;
  border-radius: 5px;
  cursor: pointer;
}
.remove{
  font-size: 20px;
  margin-left: 15px;
  line-height: 16px;
}
</style>
