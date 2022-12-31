<template>
  <div class="centerInput">
    <van-cell-group inset>
      <van-field v-model="inputVal" v-model:label="selectObj.props.labelVal" :label-align="selectObj.props.labelAlign" :label-width="selectObj.props.labelWidth" :input-align="selectObj.props.inputAlign" :placeholder="selectObj.props.placeholder" :type="selectObj.props.type" :error="selectObj.props.showError">
        <template #button v-if="selectObj.props.isShowbtn">
          <van-button size="small" :color="selectObj.props.color" @click="tuSubmit">{{selectObj.props.btnName}}</van-button>
        </template>
      </van-field>
    </van-cell-group>
  </div>
</template>

<script>
import { toRefs, reactive } from 'vue'
export default {
  name: 'centerInput',
  props: {
    selectObj: Object
  },
  setup () {
    const data = reactive({
      inputVal: ''
    })
    const tuSubmit = () => {
      console.log(data.inputVal)
    }
    return {
      ...toRefs(data),
      tuSubmit
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
.centerInput{
  width: 100%;
}
</style>