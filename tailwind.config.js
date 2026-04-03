// 【防屎山備註】：嚴禁在組件內寫死顏色代碼 (#3b82f6)。
// 透過 config 定義語意化顏色 (primary)，未來品牌色更換只需改這裡。

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js}"],
  theme: {
    extend: {
      colors: {
        // 營造商業進銷存的穩重感
        primary: '#1890ff',     // Ant Design 藍
        success: '#52c41a',     // 庫存充足綠
        warning: '#faad14',     // 預警橘
        danger: '#ff4d4f',      // 缺貨紅
        business: '#262626',    // 深色文字
      },
      spacing: {
        'safe': '1.5rem',       // 標準安全邊距
      }
    },
  },
  plugins: [],
}