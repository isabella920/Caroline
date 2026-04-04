const AUTH_KEY = 'life_system_token'

// 【防屎山備註】：這裡不包含任何 UI 提示 (message/alert)，
// 僅負責數據的存取，確保邏輯可以在非瀏覽器環境下測試。
export const authService = {
  // 檢查是否已登入
  isAuthenticated() {
    return !!sessionStorage.getItem(AUTH_KEY)
  },

  // 執行登入：儲存憑證
  setToken(token) {
    sessionStorage.setItem(AUTH_KEY, token)
  },

  // 執行登出：清除憑證
  clearToken() {
    sessionStorage.removeItem(AUTH_KEY)
  },

  // 模擬驗證邏輯
  async verifyLogin(username, password, validUser, validPass) {
    if (username === validUser && password === validPass) {
      this.setToken('mock-jwt-token-' + Date.now())
      return true
    }
    return false
  },
}
