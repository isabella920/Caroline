export const ACCOUNT_TYPES = {
  CASH: { label: '現金', color: '#9a696b', icon: 'WalletOutlined' },
  EASYCARD: { label: '悠遊卡', color: '#1890ff', icon: 'CreditCardOutlined' },
  POCKET_MONEY: { label: '零用金', color: '#faad14', icon: 'BankOutlined' }
};

export const financeColumns = [
  { title: '日期', dataIndex: 'date', key: 'date', width: '120px' },
  { title: '分類', dataIndex: 'category', key: 'category' },
  { title: '帳戶', dataIndex: 'accountLabel', key: 'accountLabel' },
  { title: '金額', dataIndex: 'amount', key: 'amount', align: 'right' },
];