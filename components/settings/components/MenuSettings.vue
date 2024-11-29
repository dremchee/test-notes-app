<script setup lang="ts">
import { useSettingsStore } from '../useSettingsStore';
import { ref, defineProps, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useThemeStore } from '@/components/useThemeStore';
import { useFontSizeAppStore } from '@/components/useFontSizeAppStore';
import { useSortNotesOrFoldersStore } from '@/components/settings/useSortNotesOrFoldersStore';

import SelectingNotesOrFolders from '@/components/notesAndFoldersScreen/components/SelectingNotesOrFolders.vue';

const props = defineProps({
  expanded: Boolean,
});

const settingsStore = useSettingsStore();
const themeStore = useThemeStore();
const fontSizeAppStore = useFontSizeAppStore();
const sortStore = useSortNotesOrFoldersStore();

const expanded = ref({
  fontSize: false,
  sort: false,
  layout: false,
  theme: false,
});

const { fontSize } = storeToRefs(settingsStore);
const { sort } = storeToRefs(settingsStore);
const { layout } = storeToRefs(settingsStore);
const { fontSizeContent } = storeToRefs(fontSizeAppStore);
const { theme } = storeToRefs(settingsStore);

const switchExpanded = (key: keyof typeof expanded.value) => {
  expanded.value[key] = !expanded.value[key];
}

const updateFontSize = (size: 'small' | 'medium' | 'large') => {
  fontSizeAppStore.setFontSizeContent(size);
}

onMounted(() => {
  fontSizeAppStore.applyFontSizeContent();
});


</script>

<template>
  <div class="menu-container">
    <div class="menu-text">Style</div>
    <div class="settings-wrapper">
      <div class="settings-box">
        <div class="menu-settings-text">Font size</div>
        <div class="settings-list-wrapper">
          <button class="settings-list-button" @click="switchExpanded('fontSize')">
            <span class="settings-list-span-output">
              {{ fontSizeContent === 'medium' ? 'Medium' : fontSizeContent === 'small' ? 'Small' : 'Large' }}
              <img class="arrow-dropdown" src="@/assets/img/icon-arrow-drop-down.svg" alt="" />
            </span>
            <ul v-show="expanded.fontSize" class="settings-list">
              <li><button class="selection-button" @click="updateFontSize('small')">Small</button></li>
              <li><button class="selection-button" @click="updateFontSize('medium')">Medium</button></li>
              <li><button class="selection-button" @click="updateFontSize('large')">Large</button></li>
            </ul>
          </button>
        </div>
      </div>
    </div>

    <div class="settings-wrapper">
      <div class="settings-box">
        <div class="menu-settings-text">Sort</div>
        <div class="settings-list-wrapper sort-list-wrapper">
          <button class="settings-list-button" @click="switchExpanded('sort')">
            <span class="settings-list-span-output">
              {{ sortStore.sortType === 'date-created' ? 'Date created' : sortStore.sortType === 'date-change' ?
                'Date change' : 'Title' }}
              <img class="arrow-dropdown" src="@/assets/img/icon-arrow-drop-down.svg" alt="" />
            </span>
            <ul v-show="expanded.sort" class="settings-list">
              <li><button class="selection-button" @click="sortStore.setSortType('date-change')">Date change</button>
              </li>
              <li><button class="selection-button" @click="sortStore.setSortType('date-created')">Date created</button>
              </li>
              <li><button class="selection-button" @click="sortStore.setSortType('title')">Title</button></li>
            </ul>
          </button>
        </div>
      </div>
    </div>


    <div class="settings-wrapper">
      <div class="settings-box">
        <div class="menu-settings-text">Layout</div>
        <div class="settings-list-wrapper sort-list-wrapper">
          <button class="settings-list-button" @click="switchExpanded('layout')">
            <span class="settings-list-span-output">
              {{ layout === 'grid' ? 'Grid' : 'List' }}
              <img class="arrow-dropdown" src="@/assets/img/icon-arrow-drop-down.svg" alt="" />
            </span>
            <ul v-show="expanded.layout" class="settings-list">
              <li><button class="selection-button" @click="settingsStore.setLayout('list')" :expanded=true>List</button>
              </li>
              <li><button class="selection-button" @click="settingsStore.setLayout('grid')">Grid</button></li>
            </ul>
          </button>
        </div>
      </div>

      <div class="settings-wrapper">
        <div class="settings-box">
          <div class="menu-settings-text">Theme</div>
          <div class="settings-list-wrapper">
            <button class="settings-list-button" @click="switchExpanded('theme')">
              <span class="settings-list-span-output">
                {{ themeStore.theme === 'system' ? 'System' : themeStore.theme === 'light' ? 'Light' : 'Dark' }}
                <img class="arrow-dropdown" src="@/assets/img/icon-arrow-drop-down.svg" alt="" />
              </span>
              <ul v-show="expanded.theme" class="settings-list">
                <li><button class="selection-button" @click="themeStore.setTheme('light')">Light</button></li>
                <li><button class="selection-button" @click="themeStore.setTheme('dark')">Dark</button></li>
                <li><button class="selection-button" @click="themeStore.setTheme('system')">System</button></li>
              </ul>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- <SelectingNotesOrFolders :layout="layout" /> -->
  </div>
</template>

<style scoped>
.menu-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 2rem;
  margin-top: 1.6875rem;
}

.menu-text {
  font-size: var(--font-size-20);
  font-weight: 500;
  color: var(--color-almost-very-light-grey);
}

.settings-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 2rem;
}

.menu-settings-text {
  font-size: var(--font-size-20);
  font-weight: 500;
  color: var(--color-grey-and-black);
}

.settings-list-button {
  position: relative;
  border: none;
  background-color: var(--color-background);
  cursor: pointer;
  width: 100%;
  text-align: left;
  font-size: var(--font-size-20);
  font-weight: 500;
}

/* Центрируем содержимое внутри settings-list-span-output */
.settings-list-span-output {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  font-size: var(--font-size-20);
  width: 100%;
  color: var(--color-grey-and-black);
}

ul.settings-list {
  margin: 0;
  padding: 0;
  list-style-type: none;
  background-color: var(--color-background);
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  z-index: 1000;
  border: 1px solid var(--color-almost-very-light-grey);
  text-align: start;
}

ul.settings-list li {
  border-bottom: 1px solid var(--color-almost-very-light-grey);
}

ul.settings-list li:last-child {
  border-bottom: none;
}

.selection-button {
  border: none;
  background-color: transparent;
  font-weight: 500;
  width: 100%;
  text-align: left;
  padding: 0.5rem 1rem;
  cursor: pointer;
  color: var(--color-grey-and-black);
}

.selection-button:hover {
  font-weight: 700;
}
</style>