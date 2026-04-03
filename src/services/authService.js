// 【防屎山備註】：Service 層絕對禁止操作 DOM 或依賴 Vue 組件。
// 這裡只負責純邏輯驗證，回傳布林值或 Throw Error。

/**
 * 驗證登入憑證
 * @param {string} inputUser - 使用者輸入帳號
 * @param {string} inputPass - 使用者輸入密碼
 * @param {string} validUser - 系統正確帳號
 * @param {string} validPass - 系統正確密碼
 * @returns {boolean} 登入是否成功
 */
export const verifyLogin = (inputUser, inputPass, validUser, validPass) => {
  if (!inputUser || !inputPass) {
    throw new Error('帳號與密碼不得為空');
  }
  return inputUser === validUser && inputPass === validPass;
};