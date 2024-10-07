<script setup lang="ts">
import HeaderNotesScreen from '~/src/elements/HeaderNotesScreen.vue';
import SearchFieldNotes from '~/src/elements/SearchFieldNotes.vue';
import SelectingNotesOrFolders from '~/src/elements/SelectingNotesOrFolders.vue';
import FolderBox from '@/src/elements/FolderBox.vue';
import AddButton from '@/src/elements/AddButton.vue';
</script>

<template>
 <div class="container">
  <HeaderNotesScreen />
  <div class="notes-content">
   <SearchFieldNotes />
   <SelectingNotesOrFolders />
   <FolderBox />
   <AddButton />
  </div>
 </div>
</template>

<style scoped></style>