<script lang="ts" setup>
import { computed, ref } from '#imports';
import CardFolder from '~/components/ui/CardFolder.vue';

const previewMode = ref<"card" | "row">("card")
</script>

<template>
  <Icon name="icon:icon-lock" />
  <div>
    <input type="radio" name="mode" v-model="previewMode" value="card"> Card
    <input type="radio" name="mode" v-model="previewMode" value="row"> Row
  </div>
  <div class="list" :class="{
    [`_${previewMode}`]: true
  }">
    <CardFolder :variant="previewMode" />
    <CardFolder :variant="previewMode" />
  </div>
</template>

<style scoped>
.list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  &._row {
    grid-template-columns: 1fr;
  }
}
</style>