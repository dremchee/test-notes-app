<script setup lang="ts">
defineProps({
 to: {
  type: String,
  required: true,
 },
 name: {
  type: String,
  required: true,
 }
})
</script>

<template>
 <div class="login-button-container">
  <nuxt-link class="login-button" :to="to">
   {{ name }}
  </nuxt-link>
 </div>
</template>

<style scoped>
.login-button-container {
 display: flex;
 justify-content: center;
 width: 100%;
 height: 3.5rem;
 margin-top: 26px;
 padding: 0 2rem;
}

.login-button {
 display: flex;
 justify-content: center;
 align-items: center;
 background-color: var(--color-blue);
 width: 100%;
 color: var(--color-white);
 text-decoration: none;
 font-size: 20px;
 font-weight: 500;
 border-radius: 12px;
 line-height: 3.5rem;
}
</style>