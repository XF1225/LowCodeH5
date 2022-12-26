<template>
  <div>
    <van-collapse v-model="activeNames">
      <van-collapse-item title="基本属性" name="1">
        <div>
          <van-cell-group inset>
            <van-field v-model="value" label="图片大小" placeholder="" />
          </van-cell-group>
        </div>
      </van-collapse-item>
      <van-collapse-item title="标题3" name="2">
        在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。
      </van-collapse-item>
    </van-collapse>
  </div>
</template>

<script>
import { toRefs, reactive } from 'vue'
export default {
  name: 'uploaderEdit',
  setup () {
    const data = reactive({
      activeNames: ['1', '2'],
      value: ''
    })
    return {
      ...toRefs(data)
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
</style>
