<script setup lang="ts">
import HeaderNotesScreen from '@/src/components/noteScreen/components/HeaderNotesScreen.vue';
import SearchFieldNotes from '@/src/components/noteScreen/components/SearchFieldNotes.vue';
import SelectingNotesOrFolders from '@/src/components/noteScreen/components/SelectingNotesOrFolders.vue';
// import FolderBox from '@/src/elements/FolderBox.vue';
import AddButton from '@/src/components/noteScreen/components/AddButton.vue';
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
  flex-grow: 1;
  overflow-y: auto;
}

.footer {
  height: 20%;
}
</style>