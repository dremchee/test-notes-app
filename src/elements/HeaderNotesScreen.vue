<script setup lang="ts">
import SettingsIcon from '@/src/assets/img/icon-settings.svg'
</script>

<template>
 <div class="header-notes">
  <div class="header-notes-title">Notes<span class="header-notes-blue-point">.</span></div>
  <button class="settings-notes">
   <img class="settings-notes-icon" :src="SettingsIcon">
  </button>
 </div>
</template>

<style scoped>
.header-notes {
 display: inline-flex;
 width: 100%;
 justify-content: space-between;
 align-items: center;
 padding: 0 40px;
 padding-top: 40px;
 padding-bottom: 20px;
}

.header-notes-title {
 font-weight: 600;
 font-size: 24px;
}

.header-notes-blue-point {
 color: var(--color-blue);
}

.settings-notes {
 border: none;
 background-color: var(--color-background);
}
</style>