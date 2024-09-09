<script lang="ts" setup>
import { computed, ref, storeToRefs } from '#imports';
import CardFolder from '~/components/ui/CardFolder.vue';
import { useNotesStore } from '~/store/notes';

const { createNote } = useNotesStore()
const { notes } = storeToRefs(useNotesStore())

const previewMode = ref<"card" | "row">("card")
const addNote = () => {
  createNote({
    id: Date.now().toString(),
    title: "Test",
    content: "Test",
    createdAt: new Date(),
    updatedAt: new Date(),
  })
}
</script>

<template>
  <Icon name="icon:icon-lock" />
  <button @click="addNote">Create</button>
  <pre>{{ notes }}</pre>
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