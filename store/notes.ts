import { defineStore, ref, persistedState } from "#imports";

type Note = {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
};

type Folder = {
  id: string;
  title: string;
  createdAt: Date;
  updatedAt: Date;
};

export const useNotesStore = defineStore(
  "notes",
  () => {
    const notes = ref<Note[]>([]);
    const folders = ref<Folder[]>([]);

    const createNote = (note: Note) => {
      notes.value.push(note);
    };

    return { notes, folders, createNote };
  },
  {
    persist: true,
  }
);
