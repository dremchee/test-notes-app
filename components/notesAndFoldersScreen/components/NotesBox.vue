<script setup lang="ts">
import FoldersNotesContainer from "@/components/notesAndFoldersScreen/components/FoldersNotesCont.vue";
import CardNotes from "@/components/notesAndFoldersScreen/components/CardNotes.vue";

import { defineProps, ref, onMounted } from "vue";

const notes = [
 { title: "Lorem ipsum dolor sit amet", date: "September 12, 2024" },
 { title: "Lorem ipsum dolor sit amet", date: "September 12, 2024" },
 { title: "Message with image Lorem ipsum dolor sit amet ", date: "September 12, 2024" },
 { title: "Lorem ipsum dolor sit amet", date: "September 12, 2024" },
];

const props = defineProps({
 expanded: Boolean,
 note: Object,
});
</script>

<template>
 <FoldersNotesContainer :expanded="props.expanded">
  <CardNotes v-for="(note, index) in notes" :expanded="props.expanded" :key="index" :note="note" :date="note.date"
   :title="note.title">
  </CardNotes>
 </FoldersNotesContainer>
</template>

<style scoped></style>
