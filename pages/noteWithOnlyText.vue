<script setup lang="ts">
import HeaderNote from '@/components/note/components/HeaderNote.vue';
import DateCreationNote from '@/components/globalComponents/DateCreationNote.vue';
import ToolsMenu from '@/components/note/components/ToolsMenu.vue';
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

   <div class="note-content">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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

.note-content {
 margin-top: 1.1875rem;
 font-size: 20px;
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