import {defineStore} from 'pinia';
import {ref} from 'vue';

export const useFontSizeAppStore = defineStore('font-size', () => {
 const fontSizeContent = ref<('small' | 'medium' | 'large')>('medium');

 const applyFontSizeContent = () => {
  const root = document.documentElement;
  switch(fontSizeContent.value) {
   case 'small':
    root.style.fontSize = '50%';
    break;
   case 'medium':
    root.style.fontSize = '100%';
    break;
   case 'large':
    root.style.fontSize = '400%';
    break;
  }
 }

 const setFontSizeContent = (size: 'small' | 'medium' | 'large') => {
  fontSizeContent.value = size;
  applyFontSizeContent();
 }


 return{
  fontSizeContent,
  setFontSizeContent,
  applyFontSizeContent,
 }
}, {
 persist: true,
});