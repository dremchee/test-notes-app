<script setup lang="ts">
import HeaderNote from '@/components/note/components/HeaderNote.vue';
import DateCreationNote from '@/components/shared/DateCreationNote.vue';
import ToolsMenu from '@/components/note/components/ToolsMenu.vue';
import NoteContentContainer from '@/components/notesAndFoldersScreen/components/NoteContentContainer.vue';

import ImgWithCats from '@/assets/img/big-img-with-cats.svg';
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

   <div class="note-image-conatiner">
    <img :src="ImgWithCats" alt="img with cats">
   </div>

   <div class="note-text">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
   </div>
  </NoteContentContainer>
  <ToolsMenu />
 </div>
</template>

<style scoped>
.note-image-conatiner {
 margin-top: 1.5rem;
 display: flex;
 justify-content: center;
 width: 100%;
 height: auto;
 /* padding: 0 2rem; */
}

.note-image-conatiner img {
 width: 100%;
 height: 100%;
}

.note-text {
 margin-top: 1.1875rem;
 font-size: var(--font-size-20);
 color: var(--color-black);
 /* margin-bottom: 2rem; */
}

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