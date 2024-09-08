<script lang="ts" setup>
withDefaults(defineProps<{
  variant: "card" | "row"
}>(), {
  variant: "card",
})
</script>

<template>
  <div class="card-folder" :class="{
    [`_${variant}`]: true
  }">
    <div>Folder:</div>
    <div>{{ variant }}</div>
  </div>
</template>

<style scoped>
.card-folder {
  padding: 1rem;
  border: 1px solid #000;
  display: flex;
  gap: 1rem;

  &._card {
    flex-direction: column;
  }
}
</style>