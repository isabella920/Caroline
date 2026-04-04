<script setup>
import { ref, watch } from 'vue';
import * as Icons from '@ant-design/icons-vue'; // 引入所有圖示，確保動態渲染
import { SIDE_MENU } from '../../constants/menuConfig';

// 【職責分離】：只接收狀態，不直接修改外部狀態
const props = defineProps({
  collapsed: { type: Boolean, required: true },
  currentRoute: { type: String, required: true }
});

const emit = defineEmits(['update:collapsed', 'navigate']);

const internalSelectedKeys = ref([props.currentRoute]);

// 監聽路由同步
watch(() => props.currentRoute, (newVal) => {
  internalSelectedKeys.value = [newVal];
});

// 切換縮進的邏輯
const toggleCollapsed = () => {
  emit('update:collapsed', !props.collapsed);
};
</script>

<template>
  <a-layout-sider
    :collapsed="collapsed"
    :trigger="null"
    collapsible
    :width="240"
    :collapsedWidth="72"
    class="vibe-sidebar"
  >
    <div class="sidebar-inner">
      <div class="logo-box">
        <span v-if="!collapsed" class="logo-text">人生系統 LITE</span>
        <component v-else :is="Icons.StarOutlined" class="logo-icon" />
      </div>

      <a-menu
        v-model:selectedKeys="internalSelectedKeys"
        theme="dark"
        mode="inline"
        class="vibe-menu"
        @click="({ key }) => $emit('navigate', key)"
      >
        <a-menu-item v-for="item in SIDE_MENU" :key="item.route">
          <template #icon>
            <component :is="Icons[item.icon]" />
          </template>
          <span>{{ item.title }}</span>
        </a-menu-item>
      </a-menu>

      <div class="custom-trigger" @click="toggleCollapsed">
        <component :is="collapsed ? Icons.MenuUnfoldOutlined : Icons.MenuFoldOutlined" />
      </div>
    </div>
  </a-layout-sider>
</template>

<style scoped>
/** * 【防屎山備註】：
 * 1. 背景強制鎖定 #9a696b，不隨狀態切換。
 * 2. 縮進後 Icon 大小與選單項目 Icon 一致，居中。
 */

.vibe-sidebar {
  background: #9a696b !important; /* 強制 Vibe 主色 */
  margin: 16px !important;
  border-radius: 24px !important;
  box-shadow: 8px 0 24px rgba(154, 105, 107, 0.15);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
  border: none !important;
  z-index: 100;
  overflow: hidden;
}

.sidebar-inner {
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
}

.logo-box {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 900;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
}

/* 展開時的文字樣式 */
.logo-text {
  font-size: 1.2rem;
  letter-spacing: 1px;
}

/* 縮起來時的 Icon 樣式 (關鍵：使其大小一致且居中) */
.logo-icon {
  font-size: 24px !important;
  color: white !important;
}

.vibe-menu {
  background: transparent !important;
  border: none !important;
  padding: 10px 8px !important;
  flex: 1; /* 佔滿剩餘空間 */
}

/* 選中項目 */
:deep(.ant-menu-item-selected) {
  background-color: rgba(255, 255, 255, 0.2) !important;
  color: white !important;
  border-radius: 12px !important;
  border-right: none !important;
  width: 100% !important;
  margin: 4px 0 !important;
}

:deep(.ant-menu-item) {
  width: 100% !important;
  margin: 4px 0 !important;
}

/* 圖示顏色與大小 */
:deep(.anticon) {
  font-size: 19px !important;
  color: white !important;
}

/* 自定義按鈕樣式 */
.custom-trigger {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.1);
  transition: background 0.3s;
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
}

.custom-trigger:hover {
  background: rgba(0, 0, 0, 0.2);
}
</style>