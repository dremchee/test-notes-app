<script setup lang="ts">
import HeaderNote from '@/components/note/components/HeaderNote.vue';
import DateCreationNote from '@/components/globalComponents/DateCreationNote.vue';
import ToolsMenu from '@/components/note/components/ToolsMenu.vue';

import ImgWithCats from '@/assets/img/big-img-with-cats.svg';
</script>

<template>
 <div class="note-container">
  <HeaderNote />
  <div class="note-content-container">
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
  </div>
  <ToolsMenu />
 </div>
</template>

<style scoped>
.note-content-container {
 display: flex;
 flex-direction: column;
 padding: 0 2rem;
 margin-top: 1.3125rem;
 margin-bottom: 2rem;
 flex-grow: 1;
}

.note-image-conatiner {
 margin-top: 1.5rem;
 display: flex;
 justify-content: center;
 width: 100%;
 height: auto;
}

.note-text {
 margin-top: 1.1875rem;
 font-size: 20px;
 color: var(--color-black);
 /* margin-bottom: 2rem; */
}

.title-note-container {
 display: flex;
 margin-top: 0.6875rem;
}

.title-note {
 font-size: 36px;
 font-weight: 600;
 color: var(--color-black);
}
</style>