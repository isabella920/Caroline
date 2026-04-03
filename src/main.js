// 【防屎山備註】：入口文件只做全局配置與插件掛載，嚴禁在此撰寫業務邏輯
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // 需配置 vue-router
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import './assets/tailwind.css'; // 引入 Tailwind

const app = createApp(App);

app.use(router);
app.use(Antd);
app.mount('#app');