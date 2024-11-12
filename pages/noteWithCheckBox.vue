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


   <div class="note-tasks-checkbox-container">
    <div class="note-task-checkbox">
     <input class="note-task-input-checkbox" type="checkbox" id="checkbox1">
     <label for="checkbox1" class="note-task-work-checkbox"></label>
     <label for="checkbox1" class="note-task-text">Lorem ipsum dolor sit amet</label>
    </div>

    <div class="note-task-checkbox">
     <input class="note-task-input-checkbox" type="checkbox" id="checkbox2">
     <label for="checkbox2" class="note-task-work-checkbox"></label>
     <label for="checkbox2" class="note-task-text">Lorem ipsum dolor sit amet</label>
    </div>

    <div class="note-task-checkbox">
     <input class="note-task-input-checkbox" type="checkbox" id="checkbox3">
     <label for="checkbox3" class="note-task-work-checkbox"></label>
     <label for="checkbox3" class="note-task-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit</label>
    </div>
   </div>
  </NoteContentContainer>
  <ToolsMenu />
 </div>
</template>

<style scoped>
.note-content {
 margin-top: 1.1875rem;
 font-size: 20px;
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

.note-tasks-checkbox-container {
 margin-top: 2rem;
 width: 100%;
 display: flex;
 flex-direction: column;
 gap: 1.125rem 0rem;
}

.note-task-checkbox {
 display: flex;
 width: 100%;
 min-height: 2rem;
 /* justify-content: center; */
 align-content: center;
 /* flex-direction: row; */
 align-items: flex-start;
 gap: 0 1.125rem;
}

.note-task-text {
 font-size: 20px;
 color: var(--color-black);
}

.note-task-input-checkbox {
 display: none;
}

.note-task-work-checkbox {
 display: inline-flex;
 width: 1.5rem;
 height: 1.5rem;
 border: 3px solid var(--color-almost-very-light-grey);
 position: relative;
 flex-shrink: 0;
}

.note-task-work-checkbox::before {
 content: "";
 display: inline-flex;
 position: absolute;
 width: 1.5rem;
 height: 1.5rem;
 background-image: url("@/assets/img/check-mark-icon.svg");
 background-repeat: no-repeat;
 background-position: center;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%);
 opacity: 0;
 transition: 0.3s ease-in-out;
}

.note-task-input-checkbox:checked+.note-task-work-checkbox::before {
 opacity: 1;
}

.note-task-checkbox input:checked~.note-task-text {
 color: var(--color-blue);
 transition: 0.3s ease-in-out;
}
</style>