<template>
  <div class="flex flex-col gap-6 p-6 min-h-screen">
    
    <section class="flex justify-between items-center bg-white p-4 rounded-2xl shadow-sm">
      <div class="text-lg font-bold text-gray-700">2026年 4月</div>
      <div class="flex gap-2">
        <button class="px-4 py-2 border rounded-lg text-sm hover:bg-gray-50 transition-colors"><</button>
        <button class="px-4 py-2 border rounded-lg text-sm hover:bg-gray-50 transition-colors">></button>
      </div>
    </section>

    <section class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div v-for="item in summaryItems" :key="item.label" 
           class="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-center min-h-36">
        <div class="text-gray-400 text-sm font-semibold mb-2">{{ item.label }}</div>
        <div class="text-3xl font-black" :class="item.textColor">
          {{ item.prefix }} {{ item.value }}
        </div>
      </div>
    </section>

    <section class="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <div class="lg:col-span-8 bg-white p-6 rounded-3xl shadow-sm min-h-75 flex flex-col border border-gray-100">
        <h3 class="font-bold text-gray-700 mb-4">月度收支趨勢</h3>
        <div class="flex-1 flex items-center justify-center border-2 border-dashed border-gray-100 rounded-2xl bg-gray-50">
          <span class="text-gray-400 italic">【功能預留：Echarts 折線圖】</span>
        </div>
      </div>
      
      <div class="lg:col-span-4 bg-white p-6 rounded-3xl shadow-sm flex flex-col border border-gray-100 min-h-75">
        <h3 class="font-bold text-gray-700 mb-4">消費類別排行</h3>
        <div class="flex-1 flex items-center justify-center border-2 border-dashed border-gray-100 rounded-2xl bg-gray-50 gap-4 p-4 text-center">
          <div class="text-sm text-gray-400 italic my-auto">
            【功能預留：TopCategories】
          </div>
        </div>
      </div>
    </section>

    <section class="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
      <div class="flex justify-between items-center mb-6">
        <h3 class="text-lg font-bold text-gray-700">收支明細紀錄</h3>
        <button class="bg-red-900 text-white! px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-lg active:scale-95">
          + 新增紀錄
        </button>
      </div>
      
      <a-table 
        :dataSource="transactions" 
        :columns="financeColumns" 
        :pagination="{ pageSize: 5 }"
        class="vibe-table"
      />
    </section>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { financeService } from '../services/financeService'
import { financeColumns } from '../constants/financeConfig'

const transactions = ref([])
const summaryItems = ref([
{ label: '本月收入', value: '0', textColor: 'text-green-600' },
{ label: '本月支出', value: '0', textColor: 'text-rose-600' },
{ label: '本月結餘', value: '0', textColor: 'text-red-900' }
])

onMounted(async () => {
  const data = financeService.getProcessedData()
  transactions.value = data.transactions
  // [未來擴充：此處呼叫 Service 計算 Row 2 的加總]
})
</script>