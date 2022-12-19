<template>
  <el-container class="common-layout">
    <el-header class="header_top">顶部导航</el-header>
    <el-container class="container_main">
      <el-aside class="aside_left">Aside</el-aside>
      <el-main class="main_content">
        <el-card class="box-card"></el-card>
      </el-main>
      <el-aside class="aside_right">Aside</el-aside>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'HelloWorld'
}
</script>
<style scoped>
.common-layout {
  width: 100%;
  height: 100vh;
}
.header_top{
  width: 100%;
  min-width: 1000px;
  height: 80px;
  line-height: 80px;
  background: green;
}
.container_main{
  width: 100%;
  height: casc(100vh - 80px);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.aside_left,.aside_right{
  width: 300px;
  height: casc(100vh - 80px);
}
.main_content{
  min-width: 400px;
  border-left: dashed 1px rgb(212, 210, 210);
  border-right: dashed 1px rgb(212, 210, 210);
  flex-shrink: 0;
}
.box-card {
  width: casc(100% - 900px);
  height: casc(100vh - 80px);
  min-height: 80vh;
}
.el-main{
  padding: 10px !important;
}
</style>