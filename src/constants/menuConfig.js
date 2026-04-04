// 【防屎山備註】：將選單寫死在元件內會導致未來難以維護。
// 統一抽離至 constants，達成資料與 UI 解耦。

export const SIDE_MENU = [
  { key: 'home', title: 'HOME', route: '/dashboard', icon: 'HomeOutlined' },
  { key: 'calendar', title: '行事曆', route: '/calendar', icon: 'CalendarOutlined' },
  { key: 'notes', title: '靈感紀錄', route: '/notes', icon: 'EditOutlined' },
  { key: 'network', title: '人際往來', route: '/network', icon: 'TeamOutlined' },
  { key: 'hobbies', title: '休閒喜好', route: '/hobbies', icon: 'HeartOutlined' },
  { key: 'inventory', title: '庫存管理', route: '/inventory', icon: 'DatabaseOutlined' },
  { key: 'finance', title: '財務管理', route: '/finance', icon: 'WalletOutlined' },
  { key: 'stats', title: '統計中心', route: '/stats', icon: 'LineChartOutlined' },
  { key: 'admin', title: '系統後台', route: '/admin', icon: 'SettingOutlined' }
];

export const MOCK_TABLE_COLUMNS = [
  { title: '項目編號', dataIndex: 'id', key: 'id' },
  { title: '名稱', dataIndex: 'name', key: 'name' },
  { title: '狀態', dataIndex: 'status', key: 'status' },
  { title: '建立時間', dataIndex: 'date', key: 'date' },
]
