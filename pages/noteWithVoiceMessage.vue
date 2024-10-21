<script setup lang="ts">
import HeaderNote from '@/src/components/note/components/HeaderNote.vue';
import DateCreationNote from '@/src/globalComponents/DateCreationNote.vue';
import ToolsMenu from '@/src/components/note/components/ToolsMenu.vue';
import VoiceMessage from '@/src/components/note/components/VoiceMessage.vue';
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
   </div>

   <div class="voice-message-content">
    <VoiceMessage />
   </div>
  </div>
  <ToolsMenu />
 </div>
</template>

<style scoped>
.note-container {
 /* position: relative; */
 display: flex;
 flex-direction: column;
 min-height: 100vh;
 width: 100%;
 overflow-x: hidden;
}

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

.voice-message-content {
 margin-top: 1.3125rem;
}
</style>