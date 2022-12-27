<template>
  <van-swipe class="my-swipe" :autoplay="3000" lazy-render :show-indicators="selectObj.props.showIndicators">
    <van-swipe-item v-for="image in selectObj.props.images" :key="image">
        <img :src="image.url" class="swipe-img" />
        <span class="img-desc">{{image.desc}}</span>
    </van-swipe-item>
  </van-swipe>
</template>

<script>
import { toRefs, reactive } from 'vue'
export default {
  name: 'centerSwiper',
  props: {
    selectObj:Object
  },
  setup () {
    const data = reactive({})
    return {
      ...toRefs(data)
    }
  }
}
</script>

<style scoped>
.my-swipe .van-swipe-item {
  width: 100%;
  height: 200px;
  color: #fff;
  font-size: 20px;
  text-align: center;
  background-color: #39a9ed;
  overflow: hidden;
  position: relative;
}
.swipe-img{
  width: 100%;
  height: 100%;
}
.img-desc{
  position: absolute;
  bottom: 5px;
  right: 5px;
  font-size: 13px;
  color: black;
}
</style>
