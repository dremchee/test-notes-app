<script setup lang="ts">
import BackButton from '@/components/globalComponents/BackButton.vue';
import HeaderName from '@/components/globalComponents/HeaderName.vue';
import SyncContainer from '@/components/settings/components/SyncContainer.vue';
import MenuSettings from '@/components/settings/components/MenuSettings.vue';
import ProfileInformation from '@/components/settings/components/ProfileInformation.vue';

definePageMeta({
 title: 'Settings',
});
</script>

<template>
 <div class="container settings">
  <div class="back-button-container">
   <BackButton to="/" />
  </div>
  <HeaderName />
  <ProfileInformation />
  <div class="text-content cloud-text">Cloud</div>
  <SyncContainer />
  <div class="settings-line-wrapper">
   <div class="settings-line"></div>
  </div>
  <MenuSettings />
  <div class="logout-container">
   <nuxt-link class="settings-logout-button" to="/login">
    Logout
   </nuxt-link>
  </div>
 </div>

</template>

<style scoped>
.container {
 display: flex;
 flex-direction: column;
 min-height: 100vh;
 /* padding-bottom: 2rem; */
 /* padding: 0 40px; */
 overflow-x: hidden;
}

.back-button-container {
 display: flex;
 height: 4rem;
 width: 100%;
 align-items: center;
 padding: 0 2rem;
 padding-top: 40px;
 padding-bottom: 20px;
}

.text-content {
 font-weight: 500;
 font-size: 20px;
 color: var(--color-almost-very-light-grey);
 margin-top: 34px;
 padding: 0 2rem;
}

.cloud-text {
 margin-top: 3.25rem;
}

.settings-line-wrapper {
 padding: 0 2rem;
 margin-top: 2.0625rem;
 width: 100%;
}

.settings-line {
 height: 1px;
 background-color: var(--color-light-grey);
}

.logout-container {
 padding: 0 2rem;
 margin-top: auto;
 padding-bottom: 2rem;
}


.settings-logout-button {
 display: flex;
 justify-content: center;
 align-items: center;
 text-decoration: none;
 border-radius: 12px;
 margin-top: 7rem;
 /* margin-bottom: 2rem; */
 width: 100%;
 height: 3.5rem;
 font-size: 20px;
 font-weight: 500;
 color: var(--color-grey);
 background-color: var(--color-white);
 box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.05);
}
</style>