<script setup lang="ts">
import HeaderNote from '@/components/note/components/HeaderNote.vue';
import DateCreationNote from '@/components/shared/DateCreationNote.vue';
import ToolsMenu from '@/components/note/components/ToolsMenu.vue';
import NoteContentContainer from '@/components/notesAndFoldersScreen/components/NoteContentContainer.vue';
</script>

<template>
 <div class="note-container">
  <HeaderNote />
  <NoteContentContainer>
   <div class="note-date-create-container">
    <DateCreationNote />
   </div>
   <div class="title-note-container">
    <div class="title-note">Lorem ipsum dolor sit amet</div>
   </div>

   <div class="note-content">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
   </div>
  </NoteContentContainer>
  <ToolsMenu />
 </div>
</template>

<style scoped>
.title-note-container {
 display: flex;
 margin-top: 0.6875rem;
}

.title-note {
 font-size: var(--font-size-36);
 font-weight: 600;
 color: var(--color-black);
}
</style>