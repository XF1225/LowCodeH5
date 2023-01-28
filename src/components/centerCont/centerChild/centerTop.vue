<template>
  <div class="centerTop">
    <div class="top_left">
      <div class="top_left_1" v-if="selectObj.props.isShowIcon">
        <p>深圳市</p>
        <van-icon name="arrow-down" />
      </div>
      <div class="top_left_2" v-else>
        <img class="top_left_2_img" :src="selectObj.props.leftIconUrl" />
      </div>
    </div>
    <div class="top_center">
      <div class="searchcont">
        <van-search
           class="contents"
          v-model="searchval"
          :placeholder="selectObj.props.placeholder"
          shape="round"
        />
        <p class="cancels" v-show="selectObj.props.showBtn">{{selectObj.props.btnName}}</p>
      </div>
    </div>
    <div class="top_right">
      <van-icon dot>
        <img class="top_right_img" :src="selectObj.props.rightIconUrl" />
      </van-icon>
    </div>
  </div>
</template>

<script>
import { toRefs, reactive } from 'vue'
export default {
  name:'centerTop',
  props: {
    selectObj: Object
  },
  setup () {
    const data = reactive({
      searchval: ''
    })
    const clearSearchval = () => data.searchval = ''
    return {
      ...toRefs(data),
      clearSearchval
    }
  }
}
</script>

<style scoped>
.centerTop{
  width: 92%;
  height: 50px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.top_left,.top_right{
  max-width: 60px;
  flex-shrink: 0;
  cursor: pointer;
}
.top_right{
  width: 50px;
}
.top_right{
  display: flex;
  justify-content: flex-end;
}
.top_right_img{
  width: 25px;
  height: 25px;
}
.top_center{
  width: 100%;
}
.searchcont{
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 5px;
}
.cancels{
  width: 40px;
  flex-shrink: 0;
  font-size: 15px;
  text-align: center;
  cursor: pointer;
}
.contents{
  width: 100%;
  height: 30px;
}
:deep().van-search{
  padding: 0 !important;
}
::-webkit-input-placeholder{
  font-size: 13px;
}
.top_left_1{
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
}
.top_left_2_img{
  width: 20px;
  height: 20px;
}
</style>