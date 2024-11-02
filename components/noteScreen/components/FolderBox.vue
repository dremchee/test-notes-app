<script setup lang="ts">
import FoldersNotesContainer from "@/layouts/FoldersNotesContainer.vue";
import CardFolder from "@/layouts/CardFolder.vue";

import { defineProps } from "vue";

const props = defineProps({
  expanded: Boolean,
  folder: Object,
});

const folders = [
  { color: "pink", title: "Project folder", quantity: "10 notes" },
  { color: "green", title: "Company folder Apple Corporation", quantity: "10 notes" },
  { color: "blue", title: "Project folder", quantity: "10 notes" },
  { color: "orange", title: "Company folder Apple Corporation", quantity: "10 notes" },
  { color: "violet", title: "Project folder", quantity: "10 notes" },
  { color: "red", title: "Company folder Apple Corporation", quantity: "10 notes" },
];
</script>

<template>
  <FoldersNotesContainer :expanded="props.expanded">
    <CardFolder v-for="(folder, index) in folders" :expanded="props.expanded" :key="index" :folder="folder"
      :color="folder.color">
    </CardFolder>
  </FoldersNotesContainer>
</template>

<style scoped></style>
