<template>
  <div :class="styles.wrapper">
    <div :class="styles.container">
      <div :class="styles.leftSection" class="hidden md:block"></div>

      <div :class="styles.rightSection">
        <h1 :class="[styles.title, 'text-center text-red-900 font-bold']">歡迎進入人生系統</h1>
        
        <a-form :model="formState" @finish="handleLogin" layout="vertical" class="custom-form">
          <a-form-item label="帳號" name="username" class="mb-6">
            <a-input v-model:value="formState.username" placeholder="請輸入帳號" />
          </a-form-item>
          
          <a-form-item label="密碼" name="password" class="mb-10">
            <a-input-password v-model:value="formState.password" placeholder="請輸入密碼" />
          </a-form-item>

          <a-form-item>
            <button type="submit" :class="styles.loginBtn">登入</button>
          </a-form-item>
        </a-form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { message } from 'ant-design-vue';
import { authService } from '../services/authService';
// 【核心調整】：導入 CSS 模組
import styles from '../assets/LoginView.module.css';

const router = useRouter();
const formState = reactive({ username: '', password: '' });

const handleLogin = async () => {
  const success = await authService.verifyLogin(
    formState.username, 
    formState.password, 
    'admin', 
    '123!@#'
  );

  if (success) {
    message.success('登入成功');
    router.push('/dashboard');
  } else {
    message.error('帳號或密碼錯誤');
  }
};
</script>
