<template>
  <div class="p-6">
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-2xl font-bold text-gray-800">{{ pageTitle }}</h2>
      <a-tag color="processing" class="text-lg px-4 py-1">🚀 模組建置中 (Coming Soon)</a-tag>
    </div>
    
    <div class="bg-white p-4 rounded-lg shadow-sm">
      <a-table 
        :dataSource="mockData" 
        :columns="MOCK_TABLE_COLUMNS" 
        :pagination="{ pageSize: 5 }" 
      />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { SIDE_MENU, MOCK_TABLE_COLUMNS } from '../constants/menuConfig';

const route = useRoute();

// 【防屎山備註】：動態計算當前頁面標題，避免針對 8 個頁面寫 8 個重複的 View 檔案
const pageTitle = computed(() => {
  const currentMenu = SIDE_MENU.find(menu => menu.route === route.path);
  return currentMenu ? currentMenu.title : '未知模組';
});

// 產生假資料供 Table 測試
const mockData = Array.from({ length: 5 }).map((_, i) => ({
  key: i,
  id: `SYS-${1000 + i}`,
  name: `測試項目資料_${i + 1}`,
  status: i % 2 === 0 ? '活躍' : '封存',
  date: new Date().toISOString().split('T')[0]
}));
</script>