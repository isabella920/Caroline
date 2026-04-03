// 【防屎山備註】：這裡只放「輸入 A 必得到 B」的純函數。
// 嚴禁在此處調用任何 Vue 相關的 API (如 ref, reactive)。

/**
 * 金額千分位格式化
 * @param {number} value 
 * @returns {string} 
 */
export const formatCurrency = (value) => {
  if (!value && value !== 0) return '--';
  return new Intl.NumberFormat('zh-TW', {
    style: 'currency',
    currency: 'TWD',
    minimumFractionDigits: 0
  }).format(value);
};

/**
 * 狀態標籤顏色對照表
 */
export const getStatusColor = (status) => {
  const statusMap = {
    '充足': 'success',
    '低水位': 'warning',
    '缺貨': 'error',
    '已完成': 'processing',
  };
  return statusMap[status] || 'default';
};