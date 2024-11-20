import {ref, watch} from 'vue';
import {defineStore} from 'pinia';

export const useThemeStore = defineStore('theme', () => {
  const theme = ref<'system' | 'dark' | 'light'>('system');

  const applyTheme = () => {
   switch(theme.value) {
    case 'dark':
     document.body.setAttribute('data-theme', 'dark');
     break;
    case 'light':
     document.body.setAttribute('data-theme', 'light');
     break;
    default:
     const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
     document.body.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
   }
  };
  

  watch(theme, applyTheme, {immediate: true});

  return {
   theme,
   setTheme: (newTheme: 'system' | 'dark' | 'light') => {
    theme.value = newTheme;
    applyTheme();
   }
  }
 }, {
 persist: true,
});