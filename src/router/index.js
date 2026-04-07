import { createRouter, createWebHistory } from 'vue-router';
import { SIDE_MENU } from '../constants/menuConfig';
import { authService } from '../services/authService';

/**
 * 【Bug 修正備註】：
 * 1. 建立明確的組件對照表，解決「網址對但頁面不對」的問題。
 * 2. 確保 dashboard 和 finance 都有對應的實體檔案。
 */
const viewComponents = {
  'home': () => import('../views/DashboardView.vue'),
  'dashboard': () => import('../views/DashboardView.vue'),
  'finance': () => import('../views/FinanceDashboardView.vue'),
};

const dynamicRoutes = SIDE_MENU.map(menu => {
  // 優先從對照表找，找不到才去 Generic
  const component = viewComponents[menu.key] || (() => import('../views/GenericPageView.vue'));
  
  return {
    path: menu.route,
    name: menu.key,
    component
  };
});

const routes = [
  {
    path: '/',
    component: () => import('../views/LayoutView.vue'),
    redirect: '/dashboard', // 預設導向
    children: dynamicRoutes
  },
  { 
    path: '/login', 
    name: 'login', 
    component: () => import('../views/LoginView.vue') 
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 【核心修復】：確保跳轉邏輯不會死鎖
router.beforeEach((to, from) => {
  const isAuth = authService.isAuthenticated();

  // 1. 如果要去非登入頁面，但沒登入 -> 回傳登入頁物件 (等同於之前的 next)
  if (to.name !== 'login' && !isAuth) {
    return { name: 'login' };
  } 
  
  // 2. 如果要去登入頁，但已經登入 -> 回傳儀表板物件
  if (to.name === 'login' && isAuth) {
    return { name: 'dashboard' };
  }

  // 3. 其餘情況直接回傳 true (代表放行)，不需呼叫 next()
  return true;
});

export default router;