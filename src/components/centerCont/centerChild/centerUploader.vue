<template>
  <div class="centerUploader">
    <van-uploader v-model="fileList" multiple preview-size="110px" :preview-full-image="false" />
  </div>
</template>

<script>
import { toRefs, reactive } from 'vue'
export default {
  name:'centerUploader',
  setup() {
    const data = reactive({
      fileList: [
        { url: 'https://fastly.jsdelivr.net/npm/@vant/assets/leaf.jpeg' },
        { url: 'https://fastly.jsdelivr.net/npm/@vant/assets/tree.jpeg', isImage: true }
      ]
    })
    return {
      ...toRefs(data)
    };
  }
}
</script>

<style scoped>

</style>