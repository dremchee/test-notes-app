<script setup lang="ts">
import { ref } from 'vue';
import SettingsIcon from '@/src/assets/img/icon-settings.svg'


// const isSwitchingSettingsPage = ref(false);

// const switchSettingsPage = () => {
//  isSwitchingSettingsPage.value = !isSwitchingSettingsPage.value;

// }
</script>

<template>
 <div class="header-notes">
  <div class="header-notes-title">Notes<span class="header-notes-blue-point">.</span></div>
  <nuxt-link class="settings-notes" to="/settingsScreen">
   <img class="settings-notes-icon" :src="SettingsIcon">
  </nuxt-link>
 </div>
</template>

<style scoped>
.header-notes {
 display: inline-flex;
 width: 100%;
 height: 4rem;
 justify-content: space-between;
 align-items: center;
 padding: 0 2rem;
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