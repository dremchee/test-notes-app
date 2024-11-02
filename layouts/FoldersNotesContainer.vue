<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
 expanded: Boolean,
})

</script>

<template>
 <div :class="['folders-notes-box-container', { expanded: props.expanded }]">
  <slot />
 </div>
</template>

<style scoped>
.folders-notes-box-container {
 display: grid;
 grid-template-columns: repeat(auto-fill, minmax(7.5rem, 1fr));
 padding: 0 2rem;
 margin-bottom: 20px;
 gap: 1rem;
 align-items: start;
 padding-bottom: 3.5rem;
}

.folders-notes-box-container.expanded {
 grid-template-columns: 1fr;
}
</style>