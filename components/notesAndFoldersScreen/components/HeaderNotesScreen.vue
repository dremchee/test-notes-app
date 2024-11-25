<script setup lang="ts">
import { ref } from 'vue';
import SettingsIcon from '@/assets/img/icon-settings.svg'


// const isSwitchingSettingsPage = ref(false);

// const switchSettingsPage = () => {
//  isSwitchingSettingsPage.value = !isSwitchingSettingsPage.value;

// }
</script>

<template>
  <div class="header-notes">
    <div class="header-notes-title">Notes<span class="header-notes-blue-point">.</span></div>
    <nuxt-link class="settings-notes" to="/settingsScreen">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16 1.33337L28.6667 8.66671V23.3334L16 30.6667L3.33334 23.3334V8.66671L16 1.33337ZM16 4.41471L6.00001 10.204V21.796L16 27.5854L26 21.796V10.204L16 4.41471ZM16 21.3334C14.5855 21.3334 13.229 20.7715 12.2288 19.7713C11.2286 18.7711 10.6667 17.4145 10.6667 16C10.6667 14.5856 11.2286 13.229 12.2288 12.2288C13.229 11.2286 14.5855 10.6667 16 10.6667C17.4145 10.6667 18.7711 11.2286 19.7712 12.2288C20.7714 13.229 21.3333 14.5856 21.3333 16C21.3333 17.4145 20.7714 18.7711 19.7712 19.7713C18.7711 20.7715 17.4145 21.3334 16 21.3334ZM16 18.6667C16.7073 18.6667 17.3855 18.3858 17.8856 17.8857C18.3857 17.3856 18.6667 16.7073 18.6667 16C18.6667 15.2928 18.3857 14.6145 17.8856 14.1144C17.3855 13.6143 16.7073 13.3334 16 13.3334C15.2928 13.3334 14.6145 13.6143 14.1144 14.1144C13.6143 14.6145 13.3333 15.2928 13.3333 16C13.3333 16.7073 13.6143 17.3856 14.1144 17.8857C14.6145 18.3858 15.2928 18.6667 16 18.6667Z"
          fill="#465163" style="currentColor" />
      </svg>
    </nuxt-link>
  </div>
</template>

<style scoped>
.header-notes {
  background-color: var(--color-background);
  position: fixed;
  top: 0;
  left: 0;
  display: inline-flex;
  width: 100vw;
  height: 4rem;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  padding-top: 40px;
  padding-bottom: 20px;
  z-index: 100;
}

.header-notes-title {
  font-weight: 600;
  font-size: var(--font-size-24);
  color: var(--color-black);
}

.header-notes-blue-point {
  color: var(--color-blue);
}

.settings-notes path {
  border: none;
  fill: var(--color-grey-and-light-gey);
}
</style>