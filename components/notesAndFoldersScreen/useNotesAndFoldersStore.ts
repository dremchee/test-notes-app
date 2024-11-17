import {ref} from 'vue';
import {defineStore} from 'pinia';

export const useNotesAndFoldersStore = defineStore('notesOrFolders', () => {
 const activeView = ref<'folders' | 'notes'>('folders');
 
 const setView = (newView: 'folders' | 'notes') => {
  activeView.value = newView;
 }

 return {
  activeView,
  setView,
 }
}, {
 persist: true,
});