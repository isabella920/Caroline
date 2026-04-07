<template>
  <div class="min-h-full space-y-8 p-4 md:p-8">
    <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
      <div
        v-for="s in summaryItems"
        :key="s.label"
        class="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm"
      >
        <div class="mb-1 text-sm font-medium text-gray-400">{{ s.label }}</div>
        <div class="text-3xl font-black" :class="s.colorClass">
          {{ s.prefix }} {{ s.value }}
          <span class="ml-1 text-xs font-normal text-gray-400">TWD</span>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 gap-8 lg:grid-cols-12">
      <div class="space-y-6 lg:col-span-4">
        <div class="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
          <h3
            class="mb-6 flex items-center gap-2 text-lg font-bold text-gray-800"
          >
            <span class="bg-vibe h-6 w-1.5 rounded-full"></span> 帳戶資產
          </h3>
          <div class="space-y-4">
            <div
              v-for="acc in balances"
              :key="acc.key"
              class="flex items-center justify-between rounded-2xl bg-gray-50/50 p-4"
            >
              <div class="flex items-center gap-3">
                <component
                  :is="iconMap[acc.icon]"
                  :style="{ color: acc.color }"
                  class="text-xl"
                />
                <span class="font-bold text-gray-600">{{ acc.label }}</span>
              </div>
              <span
                class="font-mono text-lg font-bold"
                :class="acc.total >= 0 ? 'text-gray-800' : 'text-red-500'"
              >
                {{ acc.total.toLocaleString() }}
              </span>
            </div>
          </div>
          <div
            class="mt-8 flex h-32 items-center justify-center rounded-2xl border border-dashed border-gray-200 bg-gray-50 text-xs text-gray-400 italic"
          >
            [ 資產佔比圓餅圖 ]
          </div>
        </div>
      </div>

      <div class="lg:col-span-8">
        <div class="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
          <div class="mb-6 flex items-center justify-between">
            <h3 class="text-lg font-bold text-gray-800">近期交易明細</h3>
            <a-button
              type="primary"
              shape="round"
              ghost
              class="border-vibe! text-vibe!"
              >新增紀錄</a-button
            >
          </div>
          <a-table
            :dataSource="transactions"
            :columns="financeColumns"
            :pagination="{ pageSize: 5 }"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { financeService } from '../services/financeService'
import { financeColumns } from '../constants/financeConfig'
import {
  WalletOutlined,
  CreditCardOutlined,
  BankOutlined,
} from '@ant-design/icons-vue'

/**
 * 【Vibe Coding 診斷】
 * 1. 之前報錯 ReferenceError 是因為漏掉了下面這行 ref 宣告。
 * 2. 宣告後，在 onMounted 必須使用 .value 賦值。
 */
const transactions = ref([])
const balances = ref([])
const summaryItems = ref([
  {
    label: '本月總收入',
    value: '15,000',
    colorClass: 'text-vibe',
    prefix: '+',
  },
  {
    label: '本月總支出',
    value: '4,280',
    colorClass: 'text-red-400',
    prefix: '-',
  },
  {
    label: '結餘總計',
    value: '10,720',
    colorClass: 'text-gray-800',
    prefix: '$',
  },
])

const iconMap = {
  WalletOutlined,
  CreditCardOutlined,
  BankOutlined,
}

onMounted(() => {
  try {
    const data = financeService.getProcessedData()
    // 關鍵修正：加上 .value
    transactions.value = data.transactions
    balances.value = data.balances
  } catch (error) {
    console.error('財務頁面加載失敗：', error)
  }
})
</script>
