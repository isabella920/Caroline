// 【防屎山備註】：這裡模擬未來 API 的對接。
// View 組件不應知道資料是從 localStorage 還是遠端 API 來的。

/**
 * 模擬獲取進銷存列表資料
 * @param {string} category 模組分類
 * @returns {Promise<Array>} 
 */
export const fetchInventoryList = async (category) => {
  // 模擬網路延遲，訓練 View 層處理 Loading 狀態
  await new Promise(resolve => setTimeout(resolve, 500));

  // 根據分類回傳不同的偽造資料 (Mock Data)
  const mockDB = {
    'inventory': [
      { id: 'SKU001', name: '日文檢定考題', stock: 12, price: 450, status: '充足' },
      { id: 'SKU002', name: '維他命C補充包', stock: 2, price: 1200, status: '低水位' },
    ],
    'finance': [
      { id: 'TXN-01', name: '超市採買', stock: 1, price: -850, status: '已完成' },
      { id: 'TXN-02', name: '自由職業收入', stock: 1, price: 15000, status: '已完成' },
    ]
  };

  return mockDB[category] || [];
};