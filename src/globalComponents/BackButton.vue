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
 <nuxt-link :to="to">
  <img class="icon-left" :src="IconLeft" alt="">
 </nuxt-link>
</template>

<style scoped></style>