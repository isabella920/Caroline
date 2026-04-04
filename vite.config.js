import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  // 這裡的名稱必須跟你的 GitHub 儲存庫名稱完全一樣 (例如 life-system-lite)
  base: '/',
  plugins: [vue()],
})
