<script setup lang="ts">
import HeaderNotesScreen from '@/components/notesAndFoldersScreen/components/HeaderNotesScreen.vue';
import SearchFieldNotes from '@/components/notesAndFoldersScreen/components/SearchFieldNotes.vue';
import SelectingNotesOrFolders from '@/components/notesAndFoldersScreen/components/SelectingNotesOrFolders.vue';
import AddButton from '@/components/notesAndFoldersScreen/components/AddButton.vue';
</script>

<template>
  <div class="container">
    <div class="header">
      <HeaderNotesScreen />
    </div>
    <div class="notes-content">
      <SearchFieldNotes />
      <SelectingNotesOrFolders />
    </div>
    <div class="footer">
      <AddButton />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100%;
}


.notes-content {
  padding-top: 3.5rem;
  /* flex-grow: 1;
  overflow-y: auto;
  padding-bottom: 9rem; */
}

.footer {
  width: 100%;
}
</style>