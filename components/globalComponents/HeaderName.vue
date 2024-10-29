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
 font-size: 36px;
 font-weight: 600;
 color: var(--color-black);
 padding: 0 2rem;
 margin-top: 2.125rem;
}
</style>