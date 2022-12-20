<template>
  <div>
    <van-collapse v-model="activeNames">
      <van-collapse-item title="基础组件" name="1">
        <div class="bases">
            <li>输入框</li>
            <li>按钮</li>
            <li>文本框</li>
            <li>单选</li>
            <li>日期</li>
        </div>
        </van-collapse-item>
        <van-collapse-item title="标题2" name="2">
        技术无非就是那些开发它的人的共同灵魂。
        </van-collapse-item>
        <van-collapse-item title="标题3" name="3">
        在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。
        </van-collapse-item>
    </van-collapse>
  </div>
</template>

<script>
import { toRefs, reactive } from 'vue'
export default {
  name: 'leftCont',
  setup () {
    const data = reactive({
      activeNames: ['1', '2', '3']
    })
    return {
      ...toRefs(data)
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