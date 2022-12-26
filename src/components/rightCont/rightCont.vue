<template>
 <div v-for="(item,index) of centerArr" :key="index">
    <component v-show="index===isActive" :is="item.editEl" :selectObj="item" :key="isActive"></component>
  </div>
</template>

<script>
import inputEdit from '@/components/rightCont/rightChild/inputEdit.vue'
import topEdit from '@/components/rightCont/rightChild/topEdit.vue'
import uploaderEdit from '@/components/rightCont/rightChild/uploaderEdit.vue'
import swiperEdit from '@/components/rightCont/rightChild/swiperEdit.vue'
import { toRefs, reactive } from 'vue'
export default {
  name: 'rightCont',
  props: {
    centerArr:Array,
    isActive: Number
  },
  components: {
    inputEdit,
    topEdit,
    uploaderEdit,
    swiperEdit
  },
  setup () {
    /* const data = reactive({
      isCompenent: 'topEdit'
    })
    return {
      ...toRefs(data)
    } */
  }
}
</script>

<style>

</style>