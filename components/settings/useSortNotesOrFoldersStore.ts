import {defineStore, } from 'pinia';
import {ref, reactive, watch} from 'vue';
import {formatDate} from '@/utils/formatDate';

export const useSortNotesOrFoldersStore = defineStore('sort', () => {
 const pageLinks = ref([
  '/noteWithOnlyText',
  '/noteWithCheckBox',
  '/noteWithImg',
  '/noteWithVoiceMessage',
 ]);

 const notes = reactive([
  { title: "Lorem ipsum dolor sit amet", dateCreated: formatDate('2024-01-01'), dateChanged: formatDate('2025-01-01'), to: '' },
  { title: "Lorem ipsum dolor sit amet", dateCreated: formatDate('2024-09-12'), dateChanged: formatDate('2024-09-12'), to: '' },
  { title: "AA ", dateCreated: formatDate('2024-09-12'), dateChanged: formatDate('2024-09-12'), to: '' },
  { title: "Lorem ipsum dolor sit amet", dateCreated: formatDate('2024-09-12'), dateChanged: formatDate('2024-09-12'), to: '' },
 ]);
 const folders = reactive([
  { color: "pink", title: "s", quantity: "10 notes", dateCreated: formatDate('2025-09-12'), dateChanged: formatDate('2024-09-12') },
  { color: "green", title: "Company folder Apple Corporation", quantity: "10 notes", dateCreated: formatDate('2024-09-12'), dateChanged: formatDate('2024-09-12') },
  { color: "blue", title: "Project folder", quantity: "10 notes", dateCreated: formatDate('2024-09-12'), dateChanged: formatDate('2024-09-12') },
  { color: "orange", title: "Company folder Apple Corporation", quantity: "10 notes", dateCreated: formatDate('2024-09-12'), dateChanged: formatDate('2024-09-12') },
  { color: "violet", title: "Project folder", quantity: "10 notes", dateCreated: formatDate('2024-09-12'), dateChanged: "" },
  { color: "red", title: "Company folder Apple Corporation", quantity: "10 notes", dateCreated: formatDate('2024-09-12'), dateChanged: formatDate('2024-09-12') },
 ]);

 // notes.value.forEach((note, index) => {
 //  if(pageLinks.value[index]) {
 //   console.log(pageLinks.value[index]);
   
 //   note.to = pageLinks.value[index];
 //  } else {
 //   note.to = "";
 //  }
 // });

 watch(()=> pageLinks.value, (newLinks) => {
  notes.forEach((note, index) => {
   note.to = newLinks[index];
  });
 },
 {immediate: true}
)

//  pageLinks.value.forEach((link, index) => {
//   if (notes[index]) {
//     notes[index].to = link;
//   }
// });
 

 const sortType = ref<'date-created' | 'date-change' | 'title'>('date-created');

 const sortItems = () => {
  const compareFn = (a: any, b: any) => {
   if(sortType.value === 'title') {
    return a.title.localeCompare(b.title.toLowerCase());
   } else if (sortType.value === 'date-change') {
    return new Date(b.dateChanged).getTime() - new Date(a.dateChanged).getTime();
   } else {
    return new Date(b.dateCreated).getTime() - new Date(a.dateCreated).getTime();
   }
  }

  folders.sort(compareFn);
  notes.sort(compareFn);
 }

 const setSortType = (type: 'date-created' | 'date-change' | 'title') => {
  sortType.value = type;
  sortItems();
 }

 return {
  pageLinks,
  notes,
  folders,
  sortType,
  sortItems,
  setSortType,
 }
}, {
 persist: true,
});