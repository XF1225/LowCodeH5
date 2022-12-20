<template>
  <el-container class="common-layout">
    <el-header class="header_top">顶部导航</el-header>
    <el-container class="container_main">
      <el-aside class="aside_left">
        <leftCont></leftCont>
      </el-aside>
      <el-main class="main_content">
        <div class="box-card">
          <div class="phone_h5">
            <centerCont></centerCont>
          </div>
        </div>
      </el-main>
      <el-aside class="aside_right">
        <rightCont></rightCont>
      </el-aside>
    </el-container>
  </el-container>
</template>

<script>
import { toRefs, reactive } from 'vue'
export default {
  name: 'index',
  setup () {
    const data = reactive({})
    return {
      ...toRefs(data)
    }
  }
}
</script>
<style scoped>
.common-layout {
  width: 100%;
  height: 100vh;
}
.header_top{
  width: 100%;
  min-width: 1100px;
  height: 80px;
  line-height: 80px;
  background: green;
}
.container_main{
  width: 100%;
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.aside_left,.aside_right{
  width: 350px;
  height: calc(100vh - 80px);
}
.main_content{
  min-width: 375px;
  border-left: dashed 1px rgb(212, 210, 210);
  border-right: dashed 1px rgb(212, 210, 210);
  display: flex;
  justify-content: center;
  flex-shrink: 0;
}
.box-card {
  width: calc(100% - 900px);
  height: calc(100vh - 100px);
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
  display: flex;
  justify-content: center;
}
.phone_h5{
  width: 375px;
  border: dashed 1.5px #68adf1;
  flex-shrink: 0;
  border-radius: 8px;
  overflow-y: auto;
}
.el-main{
  padding: 10px !important;
}
</style>