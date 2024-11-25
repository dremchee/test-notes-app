<script setup lang="ts">
import { useRoute } from '#app';

const route = useRoute();
</script>

<template>
 <div class="header-name-container">
  {{ route.meta.title }}
 </div>
</template>

<style scoped>
.header-name-container {
 font-size: var(--font-size-36);
 font-weight: 600;
 color: var(--color-black);
 padding: 0 2rem;
 padding-top: 5rem;
}
</style>