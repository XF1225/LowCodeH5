<template>
  <div>
    <van-collapse v-model="activeNames">
      <van-collapse-item title="基础选项" name="1">
        <div class="bases">
          <li v-for="(item,index) of componentsArr" :key="index" @click="toAdd(item)">{{item.name}}</li>
        </div>
        </van-collapse-item>
        <van-collapse-item title="其他选项" name="2">
        技术无非就是那些开发它的人的共同灵魂。
        </van-collapse-item>
    </van-collapse>
  </div>
</template>

<script>
import { toRefs, reactive } from 'vue'
export default {
  name: 'leftCont',
  props:{
    componentsArr: Array
  },
  setup (props,{emit}) {
    const data = reactive({
      activeNames: ['1', '2', '3']
    })
    const toAdd = item => {
      emit('toItem',item)
    }
    return {
      ...toRefs(data),
      toAdd
    }
  }
}
</script>

<style scoped>
.bases{
  width: 100%;
}
.bases li{
  display: inline-block;
  width: 45%;
  padding: 2px 0;
  margin: 0 8px 8px 0;
  text-align: center;
  color: black;
  background: #f1f2f3;
  border: solid 1px #f1f2f3;
  cursor: pointer;
}
.bases li:hover{
  border: solid 1px #68adf1;
}
</style>