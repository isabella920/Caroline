<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between border-b pb-4">
      <h1 class="text-3xl font-extrabold text-gray-800 m-0">總部儀表板</h1>
      <a-tag color="success" class="px-3 py-1 text-sm font-bold">系統運作正常</a-tag>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <a-card hoverable class="rounded-xl shadow-sm border-t-4 border-t-blue-500">
        <template #title><span class="text-gray-500 font-bold">行事曆待辦</span></template>
        <h2 class="text-4xl font-black text-blue-600 m-0">
          5 <span class="text-sm font-normal text-gray-400">項</span>
        </h2>
      </a-card>
      
      <a-card hoverable class="rounded-xl shadow-sm border-t-4 border-t-green-500">
        <template #title><span class="text-gray-500 font-bold">本月財務結餘</span></template>
        <h2 class="text-4xl font-black text-green-600 m-0">
          +12K <span class="text-sm font-normal text-gray-400">TWD</span>
        </h2>
      </a-card>

      <a-card hoverable class="rounded-xl shadow-sm border-t-4 border-t-purple-500">
        <template #title><span class="text-gray-500 font-bold">日文學習進度</span></template>
        <h2 class="text-4xl font-black text-purple-600 m-0">
          +1 <span class="text-sm font-normal text-gray-400">%</span>
        </h2>
      </a-card>
    </div>

    <div class="bg-white p-6 rounded-xl shadow-sm">
      <h3 class="text-xl font-bold mb-4 text-gray-700">近期重要動態</h3>
      <a-table 
        :dataSource="dashboardData" 
        :columns="columns" 
        :pagination="false" 
        size="middle" 
        class="border rounded-md"
      />
    </div>
  </div>
</template>

<script setup>
// 【防屎山備註】：View 層只負責畫面排版。
// 以下假資料未來應透過 services/dashboardService.js 打 API 取得，徹底分離資料獲取與渲染。

const columns = [
  { title: '時間', dataIndex: 'time', key: 'time', width: '20%' },
  { title: '所屬模組', dataIndex: 'module', key: 'module', width: '20%' },
  { title: '動態描述', dataIndex: 'desc', key: 'desc' },
];

const dashboardData = [
  { key: '1', time: '今天 09:00', module: '行事曆', desc: '完成晨間日文單字複習 (+1%)' },
  { key: '2', time: '昨天 22:30', module: '財務管理', desc: '記錄一筆晚餐開銷 (150元)' },
  { key: '3', time: '2026-04-02', module: '靈感與紀錄', desc: '新增「可蘿嵐的小箱箱分頁邏輯實裝」技術筆記' },
];
</script>