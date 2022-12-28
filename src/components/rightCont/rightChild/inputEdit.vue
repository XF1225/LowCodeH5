<template>
  <div class="inputEdit">
    <van-collapse v-model="activeNames">
      <van-collapse-item title="基本属性" name="1">
        <div>
          <van-cell-group inset>
            <van-field v-model="rightData.props.labelVal" label="名称" placeholder="" />
          </van-cell-group>
          <van-cell-group inset>
            <van-field v-model="rightData.props.labelWidth" label="文本宽度" placeholder="" />
          </van-cell-group>
          <van-cell-group inset>
            <van-field v-model="rightData.props.placeholder" label="提示语" placeholder="" />
          </van-cell-group>
          <div class="Select">
            <span>输入框对齐</span>
            <el-select v-model="rightData.props.labelAlign" clearable placeholder="Select">
              <el-option
                v-for="item in aligns"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                />
              </el-select>
          </div>
          <div class="types">
            <span>输入框类型</span>
            <el-select v-model="rightData.props.type" clearable placeholder="type">
              <el-option
                v-for="item in types"
                :key="item.type"
                :label="item.label"
                :value="item.value"
                />
              </el-select>
          </div>
          <div class="leftAligns">
            <span>左侧文本框对齐</span>
            <el-select v-model="rightData.props.inputAlign" clearable placeholder="Lalign">
              <el-option
                v-for="item in leftAligns"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                />
              </el-select>
          </div>
          <div class="Errors">
            <span>显示错误提示</span>
            <el-switch v-model="rightData.props.showError" />
          </div>
          <div class="showbutton">
            <span>显示右侧按钮</span>
            <el-switch v-model="rightData.props.isShowbtn" />
          </div>
          <el-input v-if="rightData.props.isShowbtn" v-model="rightData.props.btnName" placeholder="Please input" />
          <van-cell-group inset v-if="rightData.props.isShowbtn">
            <van-field v-model="rightData.props.color" label="颜色" placeholder="" />
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
  name: 'inputEdit',
  props: {
    rightData: Object
  },
  setup () {
    const data = reactive({
      activeNames: ['1', '2'],
      aligns:[
        {
          value: 'left',
          label: '向左',
        },
        {
          value: 'center',
          label: '居中',
        },
        {
          value: 'right',
          label: '向右',
        },
        {
          value: 'top',
          label: '向上',
        }
      ],
      types:[
        {
            value: 'text',
            label: '文本',
        },
        {
            value: 'tel',
            label: '手机号',
        },
        {
            value: 'number',
            label: '数字',
        },
        {
            value: 'password',
            label: '密码',
        },
        {
            value: 'digit',
            label: '整数',
        },
        {
            value: 'textarea',
            label: '文本域',
        }
      ],
      leftAligns:[
        {
          value: 'left',
          label: '向左',
        },
        {
          value: 'center',
          label: '居中',
        },
        {
          value: 'right',
          label: '向右',
        }
      ]
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
:deep().van-field__control{
  border: solid 1.3px #dedfe6 !important;
  border-radius: 4px;
  padding: 0 6px;
}
:deep().van-field__control:focus{
  border: solid 1.3px #409eff !important;
  border-radius: 4px;
  padding: 0 6px;
}
.van-cell-group--inset{
  margin: 0;
}
.Select,.types,.Errors,.Cicons,.leftAligns,.showbutton{
  padding: 0 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: black;
  margin-bottom: 15px;
}
.Select{
  margin-top: 5px;
}
.Errors,.Cicons,.showbutton{
    justify-content: flex-start;
}
.Errors span,.Cicons span,.showbutton span{
    margin-right: 20px;
}
:deep().el-input__wrapper{
  width: 190px !important;
  height: 25px !important;
}
.el-input{
  width: 92%;
  margin-left: 10px;
}
</style>