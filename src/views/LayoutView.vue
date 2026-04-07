<script setup>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { authService } from '../services/authService';
import AppSidebar from '../components/layout/AppSidebar.vue'; // 確保路徑正確

const router = useRouter();
const route = useRoute();
const collapsed = ref(false);

const handleNavigation = (path) => {
  // 【建議】：如果 path 不帶斜線，補上斜線確保是絕對路徑
  const targetPath = path.startsWith('/') ? path : `/${path}`;
  router.push(targetPath);
};

const handleLogout = () => {
  authService.clearToken();
  // 使用絕對路徑跳轉，確保不受當前路由深度影響
  router.push('/login'); 
};
</script>

<template>
  <a-layout class="main-wrapper">
    <AppSidebar 
      v-model:collapsed="collapsed"
      :currentRoute="route.path"
      @navigate="handleNavigation"
    />

    <a-layout class="content-layout">
      <a-layout-header class="custom-header">
        <div class="header-content">
          <span class="title">人生系統總部</span>
          <a-button type="link" danger @click="handleLogout">登出</a-button>
        </div>
      </a-layout-header>

      <a-layout-content class="main-content-card">
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<style scoped>
/* 這裡解決「格格不入」的問題：讓背景跟側邊欄色調呼應 */
.main-wrapper {
  min-height: 100vh;
  background: #fdfafb !important; /* 極淡玫瑰木背景 */
}
.content-layout { background: transparent !important; }

.custom-header {
  background: white !important;
  margin: 16px 16px 0 0;
  border-radius: 16px;
  height: 64px;
  line-height: 64px;
  padding: 0 24px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.02);
}
.header-content { display: flex; justify-content: space-between; align-items: center; }
.title { font-weight: bold; color: #9a696b; }

.main-content-card {
  background: white !important;
  margin: 16px 16px 16px 0;
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.02);
  min-height: 280px;
}
</style>