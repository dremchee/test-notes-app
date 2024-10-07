<script setup lang="ts">
import iconBreak from '../src/assets/img/icon-left.svg';

// import { useRoute } from 'vue-router';

// const route = useRoute();

// onMounted(() => {
//  console.log('Route meta: ', route.meta.title);

// });
</script>

<template>
 <div class="layout">
  <div class="header">
   <div class="header-breack">
    <a href="">
     <img :src="iconBreak">
    </a>
   </div>
   <div class="header-title">{{ $route.meta.title }}</div>
  </div>
  <div class="content">
   <div class="email-title">Email</div>
   <div class="email-input">
    <input type="email"></input>
   </div>
   <div class="password-title">Password</div>
   <div class="password-input">
    <input type="password"></input>
   </div>
   <button class="submit-form">
    <slot name="submit" />
   </button>
   <div class="autho-selection">
    <slot name="autho"></slot>
   </div>
  </div>
 </div>
</template>

<style scoped>
.header-title {
 margin-top: 30px;
}
</style>