// 【防屎山備註】：將選單寫死在元件內會導致未來難以維護。
// 統一抽離至 constants，達成資料與 UI 解耦。

export const SIDE_MENU = [
  { key: 'home', title: '1. HOME', route: '/dashboard' },
  { key: 'calendar', title: '2. 行事曆', route: '/calendar' },
  { key: 'notes', title: '3. 靈感與紀錄', route: '/notes' },
  { key: 'network', title: '4. 人際往來', route: '/network' },
  { key: 'hobbies', title: '5. 休閒喜好', route: '/hobbies' },
  { key: 'inventory', title: '6. 庫存管理', route: '/inventory' },
  { key: 'finance', title: '7. 財務管理', route: '/finance' },
  { key: 'stats', title: '8. 統計中心', route: '/stats' },
  { key: 'admin', title: '9. 系統後台', route: '/admin' }
];

export const MOCK_TABLE_COLUMNS = [
  { title: '項目編號', dataIndex: 'id', key: 'id' },
  { title: '名稱', dataIndex: 'name', key: 'name' },
  { title: '狀態', dataIndex: 'status', key: 'status' },
  { title: '建立時間', dataIndex: 'date', key: 'date' }
];