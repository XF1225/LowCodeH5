<template>
  <div>
    <van-collapse v-model="activeNames">
      <van-collapse-item title="基本属性" name="1">
        <div>
          <div class="areas">
            <span>显示图标或位置</span>
            <el-switch v-model="showIcon" />
          </div>
          <van-cell-group inset v-if="showIcon">
            <van-field v-model="sms" center clearable label="图标替换">
              <template #button>
                <van-button size="small" type="primary">替换</van-button>
              </template>
            </van-field>
          </van-cell-group>
          <el-input v-model="input1" placeholder="Please input" />
          <div class="showbutton">
            <span>显示按钮</span>
            <el-switch v-model="showbutton" />
          </div>
          <el-input v-if="showbutton" v-model="input2" placeholder="Please input" />
          <van-cell-group inset v-if="showIcon">
            <van-field v-model="sms" center clearable label="图标替换-右">
              <template #button>
                <van-button size="small" type="primary">替换</van-button>
              </template>
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
  setup () {
    const data = reactive({
      activeNames: ['1', '2'],
      showIcon: false,
      sms:'',
      input1: '',
      showbutton: true,
      input2: ''
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
</style>
