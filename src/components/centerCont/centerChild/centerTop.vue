<template>
  <div class="centerTop">
    <div class="top_left">
      <div class="top_left_1" v-if="selectObj.props.isShowIcon">
        <p>深圳市</p>
        <van-icon name="arrow-down" />
      </div>
      <div class="top_left_2" v-else>
        <van-icon name="location-o" />
      </div>
    </div>
    <div class="top_center">
      <div class="searchcont">
        <div class="contents">
          <van-icon name="search" class="search-icon" />
          <input type="text" v-model="selectObj.props.searchval" :placeholder="selectObj.props.placeholder" class="inputcont">
          <van-icon name="clear" v-if="selectObj.props.searchval !=''" color="#b1b3b8" class="close-icon" @click="clearSearchval" />
        </div>
        <p class="cancels" v-show="selectObj.props.showBtn">{{selectObj.props.btnName}}</p>
      </div>
    </div>
    <div class="top_right">
      <van-icon name="chat-o" dot size="25" />
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
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #f2f3f5;
  padding: 0 8px;
}
.search-icon,.close-icon{
  width: 20px;
  cursor: pointer;
}
.inputcont{
  width: 100%;
  border: 0;
  background-color: transparent;
  font-size: 13px;
}
::-webkit-input-placeholder{
  font-size: 12px;
}
.top_left_1{
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
}
</style>