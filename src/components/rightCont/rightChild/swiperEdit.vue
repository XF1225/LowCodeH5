<template>
  <div>
    <van-collapse v-model="activeNames">
      <van-collapse-item title="基本属性" name="1">
        <div>
          <van-cell-group inset>
            <van-field v-model="rightData.props.images[0].url" center clearable label="替换图片">
              <template #button>
                <van-button size="small" type="primary">替换</van-button>
              </template>
            </van-field>
          </van-cell-group>
          <el-input v-model="rightData.props.images[0].desc" placeholder="Please input" />
          <van-cell-group inset>
            <van-field v-model="rightData.props.images[1].url" center clearable label="替换图片">
              <template #button>
                <van-button size="small" type="primary">替换</van-button>
              </template>
            </van-field>
          </van-cell-group>
          <el-input v-model="rightData.props.images[1].desc" placeholder="Please input" />
          <van-cell-group inset>
            <van-field v-model="rightData.props.images[2].url" center clearable label="替换图片">
              <template #button>
                <van-button size="small" type="primary">替换</van-button>
              </template>
            </van-field>
          </van-cell-group>
          <el-input v-model="rightData.props.images[2].desc" placeholder="Please input" />
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
  name: 'swiperEdit',
  props: {
    rightData:Object
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
</style>
