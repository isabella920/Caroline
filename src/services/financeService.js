import { ACCOUNT_TYPES } from '../constants/financeConfig'

export const financeService = {
  getRawData() {
    return [
      {
        id: 1,
        date: '2026-04-07',
        category: '餐飲',
        accountType: 'CASH',
        amount: -150,
      },
      {
        id: 2,
        date: '2026-04-07',
        category: '交通',
        accountType: 'EASYCARD',
        amount: -25,
      },
      {
        id: 3,
        date: '2026-04-06',
        category: '收入',
        accountType: 'POCKET_MONEY',
        amount: 5000,
      },
    ]
  },

  getProcessedData() {
    const raw = this.getRawData()
    const transactions = raw.map((t) => ({
      ...t,
      accountLabel: ACCOUNT_TYPES[t.accountType].label,
      key: t.id,
    }))

    const balances = Object.keys(ACCOUNT_TYPES).map((key) => {
      const total = raw
        .filter((t) => t.accountType === key)
        .reduce((s, t) => s + t.amount, 0)
      return { key, total, ...ACCOUNT_TYPES[key] }
    })

    // 這裡一定要 return 一個包含 balances 的物件
    return { transactions, balances }
  },
}
