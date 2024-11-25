<script setup lang="ts">
// import BackButton from '@/components/globalComponents/BackButton.vue';
import BackButtonComponents from '@/components/shared/BackButtonContainer.vue';
import HeaderName from '@/components/shared/HeaderName.vue';
import SyncContainer from '@/components/settings/components/SyncContainer.vue';
import MenuSettings from '@/components/settings/components/MenuSettings.vue';
import ProfileInformation from '@/components/settings/components/ProfileInformation.vue';

definePageMeta({
 title: 'Settings',
});
</script>

<template>
 <div class="container settings">
  <BackButtonComponents to="/" />
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
 overflow-x: hidden;
}

.text-content {
 font-weight: 500;
 font-size: var(--font-size-20);
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
 font-size: var(--font-size-20);
 font-weight: 500;
 color: var(--color-grey);
 background-color: var(--color-white-and-grey);
 box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.05);
}
</style>