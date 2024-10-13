<script setup lang="ts">
import HeaderNotesScreen from '~/src/elements/HeaderNotesScreen.vue';
import SearchFieldNotes from '~/src/elements/SearchFieldNotes.vue';
import SelectingNotesOrFolders from '~/src/elements/SelectingNotesOrFolders.vue';
import FolderBox from '@/src/elements/FolderBox.vue';
import AddButton from '@/src/elements/AddButton.vue';
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