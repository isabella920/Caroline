// 【防屎山備註】：嚴禁將路由硬編碼 (Hardcode)。
// 透過讀取 SIDE_MENU，未來新增第 10 個選單時，只需改 constants 檔案，這裡完全不用動。

import { createRouter, createWebHistory } from 'vue-router';
import { SIDE_MENU } from '../constants/menuConfig';
import LayoutView from '../views/LayoutView.vue';

// 動態映射子路由
const dynamicRoutes = SIDE_MENU.map(menu => {
  // 將 HOME 獨立指向 Dashboard，其餘指向通用開發中模板
  const component = menu.key === 'home'
    ? () => import('../views/DashboardView.vue')
    : () => import('../views/GenericPageView.vue');

  return {
    path: menu.route,
    name: menu.key,
    component
  };
});

const routes = [
  { 
    path: '/login', 
    name: 'login', 
    component: () => import('../views/LoginView.vue') 
  },
  {
    path: '/',
    component: LayoutView,
    redirect: '/dashboard', // 預設導向首頁
    children: dynamicRoutes
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;