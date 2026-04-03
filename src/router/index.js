import { createRouter, createWebHistory } from 'vue-router';
import { SIDE_MENU } from '../constants/menuConfig';
import { authService } from '../services/authService';

// 【防屎山備註】：必須確保這裡 import 的路徑與你實際檔案夾結構一致
const dynamicRoutes = SIDE_MENU.map(menu => ({
  path: menu.route,
  name: menu.key,
  // 這裡使用動態 import，如果檔案還沒寫，會報錯，請先確認 Views 資料夾內有這些檔案
  component: menu.key === 'home' 
    ? () => import('../views/DashboardView.vue') 
    : () => import('../views/GenericPageView.vue')
}));

const routes = [
  { 
    path: '/login', 
    name: 'login', 
    component: () => import('../views/LoginView.vue') 
  },
  {
    path: '/',
    component: () => import('../views/LayoutView.vue'),
    redirect: '/dashboard',
    children: dynamicRoutes
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuth = authService.isAuthenticated();
  if (to.name !== 'login' && !isAuth) {
    next({ name: 'login' });
  } else if (to.name === 'login' && isAuth) {
    next({ path: '/' });
  } else {
    next();
  }
});

export default router;