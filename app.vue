<script setup>
import { useThemeStore } from '@/components/useThemeStore';

const themeStore = useThemeStore();
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
:root {
  --color-background: #F6F6F6;
  --color-black: #00030F;
  --color-grey: #465163;
  --color-blue: #336CED;
  --color-green: #2FAC2C;
  --color-violet: #904AC7;
  --color-primary: #FF5959;
  --color-light-grey: #DFE2E8;
  --color-white: #FFFFFF;
  /* --color-very-light-grey: #F6F6F6; */
  --color-almost-very-light-grey: #BABEC7;
  --color-light-grey-white: #F1F1F1;
  --color-grey-and-black: rgb(209, 221, 218);
  --color-grey-and-light-gey: #465163;
}

body[data-theme='light'] {
  --color-background: #F6F6F6;
  --color-grey-and-black: #1f1f1f;
  --color-white-and-grey: #FFFFFF;
  --color-grey-and-light-gey: #465163;
  --color-search: #fff;
}

body[data-theme='dark'] {
  --color-background: #1f1f1f;
  --color-grey: #eaf1fcef;
  --color-almost-very-light-grey: #5c6069;
  --color-white: rgb(236, 254, 254);
  --color-grey-and-black: rgb(209, 221, 218);
  --color-black: #ffffff;
  --color-grey: rgb(255, 250, 250);
  --color-white-and-grey: rgb(96, 102, 100);
  --color-almost-very-light-grey: #bcc0c9;
  --color-grey-and-light-gey: #BABEC7;
  --color-search: #3b3b3b;
  --color-light-grey-white: rgb(98, 105, 105);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  background-color: var(--color-background) !important;
  font-family: "Inter", system-ui;
  /* height: 100vh; */
  min-height: 100vh;
}

#app {
  display: flex;
  min-height: 100%;
}

.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.note-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
}

.card-folders-and-notes {
  container-type: inline-size;
  display: flex;
  flex-direction: column;
  background-color: var(--color-white-and-grey);
  border-radius: 1.5rem;
  padding: 1rem 1.25rem;
  box-shadow: 0 8px 20px 1px rgba(0, 0, 0, 0.1);
}

.name-folders-and-notes {
  font-size: 16px;
  font-weight: 600;
  color: var(--color-grey);

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.number-notes-in-folder-and-notes {
  margin-top: 3px;
  font-size: 14px;
  color: var(--color-almost-very-light-grey);
}

.note-content {
  margin-top: 1.1875rem;
  font-size: 20px;
  color: var(--color-black);
}
</style>