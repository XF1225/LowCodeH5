<template>
  <div>
    <van-collapse v-model="activeNames">
      <van-collapse-item title="基本属性" name="1">
        <div>
          <div class="areas">
            <span>显示图标或位置</span>
            <el-switch v-model="rightData.props.isShowIcon" />
          </div>
          <van-cell-group inset v-if="!rightData.props.isShowIcon">
            <van-field v-model="rightData.props.leftIconUrl" center label="图标替换">
            </van-field>
          </van-cell-group>
          <el-input v-model="rightData.props.placeholder" placeholder="" />
          <div class="showbutton">
            <span>显示按钮</span>
            <el-switch v-model="rightData.props.showBtn" />
          </div>
          <el-input class="elInpt" v-if="rightData.props.showBtn" v-model="rightData.props.btnName" placeholder="Please input" />
          <van-cell-group inset>
            <van-field v-model="rightData.props.rightIconUrl" center label="图标替换-右">
            </van-field>
          </van-cell-group>
        </div>
      </van-collapse-item>
      <van-collapse-item title="标题3" name="2">
        在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。
      </van-collapse-item>
    </van-collapse>
  </div>
</template>

<script>
import { toRefs, reactive } from 'vue'
export default {
  name: 'topEdit',
  props: {
    rightData: Object
  },
  setup () {
    const data = reactive({
      activeNames: ['1', '2']
    })
    return {
      ...toRefs(data)
    }
  }
}
</script>

<style scoped>
:deep().van-collapse-item__content{
  padding: 2px 4px !important;
}
:deep().van-cell-group--inset{
  margin: 0 !important;
}
:deep().van-cell{
  padding: 0 0 10px 10px !important;
}
:deep().van-field__label{
  margin: 0 !important;
}
.el-input{
  width: 90%;
  margin-left: 10px;
}
.areas,.showbutton{
  padding-left: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: black;
  margin-bottom: 10px;
}
.areas span,.showbutton span{
  margin-right: 10px;
}
.elInpt{
  margin-bottom: 10px;
}
</style>
