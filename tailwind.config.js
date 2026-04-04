// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}', // 確保包含 vue 檔案
  ],
  theme: {
    extend: {
      colors: {
        // 確保 vibe 縮在 colors 裡面
        vibe: '#9a696b',
      },
    },
  },
  // ... 其他設定
}
