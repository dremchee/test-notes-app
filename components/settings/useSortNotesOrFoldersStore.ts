import {defineStore} from 'pinia';
import {ref} from 'vue';
import {formatDate} from '@/utils/formatDate';

export const useSortNotesOrFoldersStore = defineStore('sort', () => {
 const notes = ref([
  { title: "Lorem ipsum dolor sit amet", dateCreated: formatDate('2024-01-01'), dateChanged: formatDate('2025-01-01') },
  { title: "Lorem ipsum dolor sit amet", dateCreated: formatDate('2024-09-12'), dateChanged: formatDate('2024-09-12') },
  { title: "AA ", dateCreated: formatDate('2024-09-12'), dateChanged: formatDate('2024-09-12') },
  { title: "Lorem ipsum dolor sit amet", dateCreated: formatDate('2024-09-12'), dateChanged: formatDate('2024-09-12') },
 ]);
 const folders = ref([
  { color: "pink", title: "s", quantity: "10 notes", dateCreated: formatDate('2025-09-12'), dateChanged: formatDate('2024-09-12') },
  { color: "green", title: "Company folder Apple Corporation", quantity: "10 notes", dateCreated: formatDate('2024-09-12'), dateChanged: formatDate('2024-09-12') },
  { color: "blue", title: "Project folder", quantity: "10 notes", dateCreated: formatDate('2024-09-12'), dateChanged: formatDate('2024-09-12') },
  { color: "orange", title: "Company folder Apple Corporation", quantity: "10 notes", dateCreated: formatDate('2024-09-12'), dateChanged: formatDate('2024-09-12') },
  { color: "violet", title: "Project folder", quantity: "10 notes", dateCreated: formatDate('2024-09-12'), dateChanged: "" },
  { color: "red", title: "Company folder Apple Corporation", quantity: "10 notes", dateCreated: formatDate('2024-09-12'), dateChanged: formatDate('2024-09-12') },
 ]);

 const sortType = ref<'date-created' | 'date-change' | 'title'>('date-created');

 const sortItems = () => {
  const compareFn = (a: any, b: any) => {
   if(sortType.value === 'title') {
    return a.title.localCompare(b.title);
   } else if (sortType.value === 'date-change') {
    return new Date(b.dateChanged).getTime() - new Date(a.dateChanged).getTime();
   } else {
    return new Date(b.dateCreated).getTime() - new Date(a.dateCreated).getTime();
   }
  }

  folders.value.sort(compareFn);
  notes.value.sort(compareFn);
 }

 const setSortType = (type: 'date-created' | 'date-change' | 'title') => {
  sortType.value = type;
  sortItems();
 }

 return {
  notes,
  folders,
  sortType,
  sortItems,
  setSortType,
 }
}, {
 persist: true,
});