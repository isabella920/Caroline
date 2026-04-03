<template>
  <a-layout class="min-h-screen">
    <a-layout-sider v-model:collapsed="collapsed" collapsible class="bg-gray-900 shadow-xl">
      <div class="h-16 flex items-center justify-center text-white font-bold text-xl tracking-wider">
        {{ collapsed ? 'SYS' : '人生系統 Lite' }}
      </div>
      <a-menu
        v-model:selectedKeys="selectedKeys"
        theme="dark"
        mode="inline"
        @click="handleMenuClick"
        class="bg-gray-900"
      >
        <a-menu-item v-for="item in SIDE_MENU" :key="item.route">
          <span>{{ item.title }}</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>

    <a-layout>
      <a-layout-header class="bg-white px-6 shadow-sm flex justify-between items-center z-10">
        <h2 class="text-xl font-semibold m-0 text-gray-700">歡迎登入，總部指揮官</h2>
        <a-button type="text" danger @click="handleLogout" class="font-bold">
          登出系統
        </a-button>
      </a-layout-header>

      <a-layout-content class="m-6 p-6 bg-gray-50 rounded-lg shadow-inner overflow-y-auto">
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { message } from 'ant-design-vue';
import { SIDE_MENU } from '../constants/menuConfig';
import { authService } from '../services/authService'; // 務必導入

const router = useRouter();
const route = useRoute();

const collapsed = ref(false);
const selectedKeys = ref([route.path]);

// 監聽路由變化，保持選單高亮一致
watch(() => route.path, (newPath) => {
  selectedKeys.value = [newPath];
});

const handleMenuClick = ({ key }) => {
  router.push(key);
};

const handleLogout = () => {
  // 1. 清除憑證
  authService.clearToken(); 
  // 2. 提示使用者
  message.info('已安全登出系統');
  // 3. 跳轉回登入頁
  router.push('/login');
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>