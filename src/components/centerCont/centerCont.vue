<template>
  <div v-for="(item,index) of centerArr" :key="index" :class="[{active:index===isActive}]">
    <component :is="item.el" :selectObj="item" :key="index" @click="changeIndex(index)"></component>
  </div>
</template>

<script>
import centerInput from '@/components/centerCont/centerChild/centerInput.vue'
import centerTop from '@/components/centerCont/centerChild/centerTop.vue'
import centerUploader from '@/components/centerCont/centerChild/centerUploader.vue'
import centerSwiper from '@/components/centerCont/centerChild/centerSwiper.vue'
import { toRefs, reactive } from 'vue'
export default {
  name: 'centerCont',
  props: {
    centerArr:Array,
    isActive: Number
  },
  components:{
    centerInput,
    centerTop,
    centerUploader,
    centerSwiper
  },
  emits: ['update:isActive'],
  setup (props,{emit}) {
    const data = reactive({})
    const changeIndex = index => {
      emit('update:isActive', index)
    }
    return {
      ...toRefs(data),
      changeIndex
    }
  }
}
</script>

<style scoped>
.active{
  border: solid 1px rgb(30, 78, 235);
}
</style>