<script setup lang="ts">
import { ref, computed, defineProps } from 'vue';
import { storeToRefs } from 'pinia';
import { useNotesAndFoldersStore } from '../useNotesAndFoldersStore';
import { useSettingsStore } from '@/components/settings/useSettingsStore';
import FolderBox from './FolderBox.vue';
import NotesBox from './NotesBox.vue';


const notesAndFoldersStore = useNotesAndFoldersStore();
const settingsStore = useSettingsStore();

const { activeView } = storeToRefs(notesAndFoldersStore);
const { layout } = storeToRefs(settingsStore);

const openNotes = () => {
  notesAndFoldersStore.setView('notes');
}

const openFolder = () => {
  notesAndFoldersStore.setView('folders');
}

</script>

<template>
  <div class="selecting-container">
    <a @click="openNotes" class="selecting"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M20 22H4C3.73478 22 3.48043 21.8946 3.29289 21.7071C3.10536 21.5196 3 21.2652 3 21V3C3 2.73478 3.10536 2.48043 3.29289 2.29289C3.48043 2.10536 3.73478 2 4 2H20C20.2652 2 20.5196 2.10536 20.7071 2.29289C20.8946 2.48043 21 2.73478 21 3V21C21 21.2652 20.8946 21.5196 20.7071 21.7071C20.5196 21.8946 20.2652 22 20 22ZM19 20V4H5V20H19ZM8 7H16V9H8V7ZM8 11H16V13H8V11ZM8 15H13V17H8V15Z"
          fill="currentColor" />
      </svg>
      Notes</a>
    <a @click="openFolder" class="selecting"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12.414 5H21C21.2652 5 21.5196 5.10536 21.7071 5.29289C21.8946 5.48043 22 5.73478 22 6V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3H10.414L12.414 5ZM20 11H4V19H20V11ZM20 9V7H11.586L9.586 5H4V9H20Z"
          fill="#currentColor" />
      </svg>
      Folders</a>
  </div>

  <div>
    <FolderBox v-if="activeView === 'folders'" :expanded="layout === 'list'" />
    <NotesBox v-else :expanded="layout === 'list'" />
  </div>
</template>

<style scoped>
.selecting-container {
  display: flex;
  gap: 0px 20px;
  width: 100%;
  padding: 0px 2rem 20px;
}

.selecting {
  display: flex;
  align-items: center;
  width: 10rem;
  height: 2.5rem;
  background-color: var(--color-white-and-grey);
  cursor: pointer;
  text-decoration: none;
  border-radius: 40px;
  gap: 0 6px;
  padding: 0 10px;
  color: var(--color-grey);
  font-weight: 500;
}

.selecting:hover {
  color: var(--color-blue);
}

.selecting svg path {
  fill: var(--color-grey-and-light-gey);
}

.selecting:hover svg path {
  fill: var(--color-blue);
}

.settings-screen-button {

  width: 100px;
  height: 30px;
  background-color: var(--color-blue);
  color: white;
  font-size: 18px;
  font-weight: 500;
  border: none;
  border-radius: 20px;
  cursor: pointer;
}
</style>