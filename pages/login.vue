<script setup lang="ts">
import BackButton from '@/src/globalComponents/BackButton.vue';
import LoginButton from '@/src/globalComponents/LoginButton.vue';
import ForDataEntry from '@/src/components/entranceInAcc/components/ForDataEntry.vue';
import HeaderName from '@/src/globalComponents/HeaderName.vue';

definePageMeta({
 title: 'Login',
})
</script>

<template>
 <div class="login-container">
  <BackButton to="/settingsScreen" />

  <HeaderName />

  <ForDataEntry />

  <LoginButton to="/authorizedSettings" name="Login" />


  <div class="login-link-for-create-new-acc-container">
   <nuxt-link class="login-link-for-create-new-acc-text" to="/register">Create a new account</nuxt-link>
  </div>
 </div>
</template>

<style scoped>
.back-button-container {
 display: flex;
 height: 4rem;
 width: 100%;
 align-items: center;
 padding: 0 40px;
 padding-top: 40px;
 padding-bottom: 20px;
}

.login-link-for-create-new-acc-container {
 display: flex;
 justify-content: center;
 width: 100%;
 margin-top: 1.5rem;
}

.login-link-for-create-new-acc-text {
 font-size: 20px;
 font-weight: 500;
 color: var(--color-blue);
 text-decoration: none;
}
</style>