<script setup lang="ts">
import BackButtonContainer from '@/components/shared/BackButtonContainer.vue';
import LoginButton from '@/components/shared/LoginButton.vue';
import ForDataEntry from '@/components/entranceInAcc/components/ForDataEntry.vue';
import HeaderName from '@/components/shared/HeaderName.vue';

definePageMeta({
 title: 'Login',
})
</script>

<template>
 <div class="login-container">
  <BackButtonContainer to="/settingsScreen" />

  <HeaderName />

  <ForDataEntry />

  <LoginButton to="/authorizedSettings" name="Login" />


  <div class="login-link-for-create-new-acc-container">
   <nuxt-link class="login-link-for-create-new-acc-text" to="/register">Create a new account</nuxt-link>
  </div>
 </div>
</template>

<style scoped>
.login-link-for-create-new-acc-container {
 display: flex;
 justify-content: center;
 width: 100%;
 margin-top: 1.5rem;
}

.login-link-for-create-new-acc-text {
 font-size: var(--font-size-20);
 font-weight: 500;
 color: var(--color-blue);
 text-decoration: none;
}
</style>