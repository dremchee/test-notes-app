import { defineStore, ref, persistedState } from "#imports";

type Note = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
};

type Folder = {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
};

export const useNotesStore = defineStore(
  "notes",
  () => {
    const notes = ref<Note[]>([]);
    const folders = ref<Folder[]>([]);

    return { notes, folders };
  },
  {
    persist: {
      storage: persistedState.localStorage,
    },
  }
);
