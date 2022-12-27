<template>
  <div>
    <van-collapse v-model="activeNames">
      <van-collapse-item title="基本属性" name="1">
        <div>
          <van-cell-group inset>
            <van-field v-model="rightData.props.previewSize" label="图片大小" placeholder="" />
          </van-cell-group>
          <div class="showBimg">
            <span>开启图片预览</span>
            <el-switch v-model="rightData.props.fullImage" />
          </div>
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
  name: 'uploaderEdit',
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
:deep().van-cell-group--inset{
  margin: 0 !important;
}
:deep().van-cell{
  padding: 10px 0 !important;
}
:deep().van-field__label{
  width: 70px;
}
.van-collapse-item{
  padding: 0 10px;
}
.showBimg{
  display: flex;
  flex-direction: row;
  align-items: center;
  color: black;
  margin-bottom: 10px;
}
.showBimg span{
  margin-right: 10px;
}
</style>
