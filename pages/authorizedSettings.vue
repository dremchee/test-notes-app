<script setup lang="ts">
import BackButton from '@/src/components/settings/components/BackButton.vue';
import HeaderName from '@/src/globalComponents/HeaderName.vue';
import SyncContainer from '@/src/components/settings/components/SyncContainer.vue';
import MenuSettings from '@/src/components/settings/components/MenuSettings.vue';
import ProfileInformation from '@/src/components/settings/components/ProfileInformation.vue';

definePageMeta({
 title: 'Settings',
});
</script>

<template>
 <div class="container settings">
  <BackButton />
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
 /* display: flex; */
 /* flex-direction: column; */
 min-height: 100vh;
 padding-bottom: 2rem;
}

.text-content {
 font-weight: 500;
 font-size: 20px;
 color: var(--color-almost-very-light-grey);
 margin-top: 34px;
 padding: 0 40px;
}

.cloud-text {
 margin-top: 52px;
}

.settings-line-wrapper {
 padding: 0 40px;
}

.settings-line {
 /* padding: 0 40px; */
 margin-top: 2.0625rem;
 width: 100%;
 height: 1px;
 background-color: var(--color-light-grey);
}

.logout-container {
 padding: 0 40px;
}


.settings-logout-button {
 display: flex;
 justify-content: center;
 align-items: center;
 text-decoration: none;
 border-radius: 12px;
 margin-top: 9rem;
 margin-bottom: 2rem;
 width: 100%;
 height: 3.5rem;
 font-size: 20px;
 font-weight: 500;
 color: var(--color-grey);
 background-color: var(--color-white);
 box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.05);
}
</style>