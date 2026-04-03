<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-md w-96">
      <h1 class="text-2xl font-bold mb-6 text-center text-gray-800">人生系統 Lite 登入</h1>
      <a-form :model="formState" @finish="handleLogin" layout="vertical">
        <a-form-item label="帳號" name="username" :rules="[{ required: true, message: '請輸入帳號!' }]">
          <a-input v-model:value="formState.username" placeholder="請輸入 admin" />
        </a-form-item>
        
        <a-form-item label="密碼" name="password" :rules="[{ required: true, message: '請輸入密碼!' }]">
          <a-input-password v-model:value="formState.password" placeholder="請輸入 123!@#" />
        </a-form-item>

        <a-form-item>
          <a-button type="primary" html-type="submit" class="w-full bg-blue-500 hover:bg-blue-600">
            登入系統
          </a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { message } from 'ant-design-vue';
import { verifyLogin } from '../services/authService';

const router = useRouter();

// 嚴格遵守指示：假帳密定義於 Login View 中
const FAKE_ACCOUNT = 'admin';
const FAKE_PASSWORD = '123!@#';

const formState = reactive({
  username: '',
  password: '',
});

// 【防屎山備註】：View 僅負責收集數據與路由跳轉，核心判斷委派給 authService
const handleLogin = () => {
  try {
    const isSuccess = verifyLogin(
      formState.username, 
      formState.password, 
      FAKE_ACCOUNT, 
      FAKE_PASSWORD
    );
    
    if (isSuccess) {
      message.success('登入成功！歡迎回到總部。');
      router.push('/dashboard');
    } else {
      message.error('帳號或密碼錯誤');
    }
  } catch (err) {
    message.warning(err.message);
  }
};
</script>