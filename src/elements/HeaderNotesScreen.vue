<script setup lang="ts">
import SettingsIcon from '@/src/assets/img/icon-settings.svg'
</script>

<template>
 <div class="header-notes">
  <div class="header-notes-title">Notes</div>
  <button class="settings-notes">
   <img :src="SettingsIcon">
  </button>
 </div>
</template>

<style scoped></style>