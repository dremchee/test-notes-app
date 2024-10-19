<script setup lang="ts">
import IconLeft from '@/src/assets/img/icon-left.svg'

defineProps({
 to: {
  type: String,
  required: true,
 }
})

</script>

<template>
 <div class="back-button-container">
  <nuxt-link :to="to">
   <img class="icon-left" :src="IconLeft" alt="">
  </nuxt-link>
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
</style>