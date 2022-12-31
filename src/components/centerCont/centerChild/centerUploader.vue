<template>
  <div class="centerUploader">
    <van-uploader v-model="selectObj.props.fileList" multiple :preview-size="selectObj.props.previewSize" :preview-full-image="selectObj.props.fullImage" />
  </div>
</template>

<script>
import { toRefs, reactive } from 'vue'
export default {
  name:'centerUploader',
  props: {
    selectObj: Object
  },
  setup(props) {
    const data = reactive({})
    return {
      ...toRefs(data)
    };
  }
}
</script>

<style scoped>
.centerUploader{
  width: 100%;
}
</style>