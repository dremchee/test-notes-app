import {defineStore, storeToRefs} from 'pinia';


export const useSettingsStore = defineStore('settings', () => {
 const fontSize = ref<'small' | 'medium' | 'large'>('medium');
 const sort = ref<'date-chage' | 'date-created' | 'title'>('date-created')
 const layout = ref<'grid' | 'list'>('grid');
 const theme = ref<'system' | 'light' | 'dark'>('system');


 const setFontSize = (newSize: 'small' | 'medium' | 'large') => {
  fontSize.value = newSize;
 }

 const setSort = (newSort: 'date-chage' | 'date-created' | 'title') => {
  sort.value = newSort;
 }

 const setLayout = (newLayout: 'grid' | 'list') => {
  layout.value = newLayout;
 }

 const setTheme = (newTheme: 'system' | 'light' | 'dark') => {
  theme.value = newTheme;
 }

 return {
  fontSize,
  sort,
  layout,
  theme,
  setFontSize,
  setSort,
  setLayout,
  setTheme,
 }
}, {
 persist: true,
});