<script setup lang="ts">
import { ref } from 'vue';

const expanded = ref({
  fontSize: false,
  sort: false,
  layout: false,
  theme: false,
})

const switchExpanded = (key: keyof typeof expanded.value) => {
  expanded.value[key] = !expanded.value[key];
}


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
              Medium
              <img class="arrow-dropdown" src="@/assets/img/icon-arrow-drop-down.svg" alt="" />
            </span>
            <ul v-show="expanded.fontSize" class="settings-list">
              <li><span class="selection-button">Small</span></li>
              <li><span class="selection-button">Medium</span></li>
              <li><span class="selection-button">Large</span></li>
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
              Date created
              <img class="arrow-dropdown" src="@/assets/img/icon-arrow-drop-down.svg" alt="" />
            </span>
            <ul v-show="expanded.sort" class="settings-list">
              <li><span class="selection-button">Date change</span></li>
              <li><span class="selection-button">Date created</span></li>
              <li><span class="selection-button">Title</span></li>
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
              Grid
              <img class="arrow-dropdown" src="@/assets/img/icon-arrow-drop-down.svg" alt="" />
            </span>
            <ul v-show="expanded.layout" class="settings-list">
              <li><span class="selection-button">List</span></li>
              <li><span class="selection-button">Grid</span></li>
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
                System
                <img class="arrow-dropdown" src="@/assets/img/icon-arrow-drop-down.svg" alt="" />
              </span>
              <ul v-show="expanded.theme" class="settings-list">
                <li><span class="selection-button">Light</span></li>
                <li><span class="selection-button">System</span></li>
                <li><span class="selection-button">Dark</span></li>
              </ul>
            </button>
          </div>
        </div>
      </div>
    </div>
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
  font-size: 20px;
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
  font-size: 20px;
  font-weight: 500;
  color: var(--color-grey);
}

.settings-list-button {
  position: relative;
  border: none;
  background-color: transparent;
  cursor: pointer;
  width: 100%;
  text-align: left;
  font-size: 20px;
  font-weight: 500;
}

/* Центрируем содержимое внутри settings-list-span-output */
.settings-list-span-output {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  font-size: 20px;
  width: 100%;
}

ul.settings-list {
  margin: 0;
  padding: 0;
  list-style-type: none;
  background-color: var(--color-white);
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
}

.selection-button:hover {
  font-weight: 700;
}
</style>