<script setup lang="ts">
import FoldersNotesCont from "@/components/notesAndFoldersScreen/components/FoldersNotesCont.vue";
import CardFolder from "@/components/notesAndFoldersScreen/components/CardFolder.vue";
import { useSortNotesOrFoldersStore } from "@/components/settings/useSortNotesOrFoldersStore";

import { defineProps } from "vue";

const sortNotesOrFoldersStore = useSortNotesOrFoldersStore();

const props = defineProps({
  expanded: Boolean,
  // folder: Object,
});

// const folders = [
//   { color: "pink", title: "Project folder", quantity: "10 notes", date: "September 12, 2024" },
//   { color: "green", title: "Company folder Apple Corporation", quantity: "10 notes", date: "September 12, 2024" },
//   { color: "blue", title: "Project folder", quantity: "10 notes", date: "September 12, 2024" },
//   { color: "orange", title: "Company folder Apple Corporation", quantity: "10 notes", date: "September 12, 2024" },
//   { color: "violet", title: "Project folder", quantity: "10 notes", date: "September 12, 2024" },
//   { color: "red", title: "Company folder Apple Corporation", quantity: "10 notes", date: "September 12, 2024" },
// ];
</script>

<template>
  <FoldersNotesCont :expanded="props.expanded">
    <CardFolder v-for="(folder, index) in sortNotesOrFoldersStore.folders" :expanded="props.expanded"
      sortNotesOrFoldersStore :key="index" :folder="folder" :dateChanged="folder.dateChanged"
      :dateCreated="folder.dateCreated">
    </CardFolder>
  </FoldersNotesCont>
</template>

<style scoped></style>
