<script setup lang="ts">
import BackButton from "@/components/globalComponents/BackButton.vue";
</script>

<template>
 <div class="back-button-container">
  <BackButton to="/" />
 </div>
</template>

<style scoped>
.back-button-container {
 position: fixed;
 top: 0;
 left: 0;
 background-color: var(--color-background);
 display: flex;
 height: 4rem;
 width: 100vw;
 align-items: center;
 padding: 0 2rem;
 padding-top: 40px;
 padding-bottom: 20px;
}
</style>