<script setup lang="ts">
import HeaderName from '@/src/globalComponents/HeaderName.vue';
import BackButton from '@/src/globalComponents/BackButton.vue';
import LoginButton from '@/src/globalComponents/LoginButton.vue';
import SyncContainer from '@/src/components/settings/components/SyncContainer.vue';
import MenuSettings from '@/src/components/settings/components/MenuSettings.vue';

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
  <div class="text-content">Authorization</div>
  <LoginButton to="/login" name="Login" />
  <div class="text-content cloud-text">Cloud</div>
  <SyncContainer />
  <div class="settings-line-wrapper">
   <div class="settings-line"></div>
  </div>
  <MenuSettings />
  <div class="logout-container"></div>
 </div>

</template>

<style scoped>
.back-button-container {
 display: flex;
 height: 4rem;
 width: 100%;
 align-items: center;
 padding: 0 2rem;
 padding-top: 40px;
 padding-bottom: 20px;
}

.container {
 display: flex;
 flex-direction: column;
 height: 100vh;
}

.text-content {
 font-weight: 500;
 font-size: 20px;
 color: var(--color-almost-very-light-grey);
 margin-top: 34px;
 padding: 0 2rem;
}

.cloud-text {
 margin-top: 52px;
}

.settings-line-wrapper {
 padding: 0 2rem;
}

.settings-line {
 padding: 0 2rem;
 margin-top: 2.0625rem;
 width: 100%;
 height: 1px;
 background-color: var(--color-light-grey);
}

.logout-container {
 display: flex;
 justify-content: center;
 margin-top: 8rem;
 padding: 0 40px 33px 40px;
 width: 100%;
 height: 6rem;

}
</style>