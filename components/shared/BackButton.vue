<script setup lang="ts">
import IconLeft from '@/assets/img/icon-left.svg'

defineProps({
 to: {
  type: String,
  required: true,
 }
})

</script>

<template>
 <nuxt-link :to="to">
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
   <path
    d="M10.4373 14.6666H26.6667V17.3333H10.4373L17.5893 24.4853L15.704 26.3706L5.33334 15.9999L15.704 5.62927L17.5893 7.51461L10.4373 14.6666Z"
    fill="#465163" style="currentColor" />
  </svg>
 </nuxt-link>
</template>

<style scoped>
svg path {
 fill: var(--color-grey-and-light-gey);
}
</style>