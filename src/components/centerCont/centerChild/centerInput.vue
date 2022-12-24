<template>
  <div>
    <van-cell-group inset>
      <van-field v-model="value" label="文本" label-align="center" label-width="40px" input-align="center" placeholder="请输入用户名">
        <template #button v-if="true">
          <van-button size="small" type="primary">发送验证码</van-button>
        </template>
      </van-field>
    </van-cell-group>
  </div>
</template>

<script>
import { toRefs, reactive } from 'vue'
export default {
  name: 'centerInput',
  setup () {
    const data = reactive({
      value: ''
    })
    return {
      ...toRefs(data)
    }
  }
}
</script>

<style scoped>
.van-cell-group--inset{
  margin: 0;
}
.van-cell{
  align-items: center;
}
</style>