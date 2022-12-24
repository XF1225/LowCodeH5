<template>
  <div class="centerFooter">
    <van-tabbar v-model="active" style="position:absolute;bottom:0;width:375px;">
      <van-tabbar-item badge="2">
        <span>自定义</span>
        <template #icon="props">
        <img :src="props.active ? icon.active : icon.inactive" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item>
        <span>标签</span>
        <template #icon="props">
        <img :src="props.active ? icon.active : icon.inactive" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item>
        <span>我的</span>
        <template #icon="props">
        <img :src="props.active ? icon.active : icon.inactive" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name:'centerFooter',
  setup() {
    const active = ref(0);
    const icon = {
      active: 'https://fastly.jsdelivr.net/npm/@vant/assets/user-active.png',
      inactive:
        'https://fastly.jsdelivr.net/npm/@vant/assets/user-inactive.png',
    };
    return {
      icon,
      active,
    };
  }
}
</script>

<style scoped>
.centerFooter{
  min-width: 375px;
  height: 50px;
  position: absolute;
  bottom: 12px;
  overflow: hidden;
}
</style>