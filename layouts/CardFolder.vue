<script setup lang="ts">

import { defineProps } from "vue";

const props = defineProps({
 expanded: Boolean,
 folder: {
  type: Object,
  required: true,

 },
});

</script>

<template>

 <div class="card-folders-and-notes">
  <div :class="['card-folder-visual-content', { expanded: props.expanded }]">
   <div v-if="props.expanded" class="card-folder-inited-icon-and-text-info">
    <div class="folder-icon folder-icon-expanded">
     <svg width="80" height="70" viewBox="0 0 80 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path opacity="0.4"
       d="M0 12C0 5.37258 5.37258 0 12 0H26C32.6274 0 38 5.37258 38 12V19C38 25.6274 32.6274 31 26 31H12C5.37258 31 0 25.6274 0 19V12Z"
       :fill="folder.color" />
      <path
       d="M0 22C0 15.3726 5.37258 10 12 10H68C74.6274 10 80 15.3726 80 22V58C80 64.6274 74.6274 70 68 70H12C5.37258 70 0 64.6274 0 58V22Z"
       :fill="folder.color" />
      <rect x="19" y="40" width="42" height="6" rx="3" fill="white" style="curentColor" />
     </svg>

    </div>
    <div v-if="props.expanded" class="card-folder-text-info">
     <div class="name-folders-and-notes">{{ props.folder.title }}</div>
     <div class="number-notes-in-folder-and-notes">{{ props.folder.quantity }}</div>
    </div>
   </div>
   <div :class="['folder-icon', { expanded: props.expanded }]">
    <svg width="80" height="70" viewBox="0 0 80 70" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path opacity="0.4"
      d="M0 12C0 5.37258 5.37258 0 12 0H26C32.6274 0 38 5.37258 38 12V19C38 25.6274 32.6274 31 26 31H12C5.37258 31 0 25.6274 0 19V12Z"
      :fill="folder.color" />
     <path
      d="M0 22C0 15.3726 5.37258 10 12 10H68C74.6274 10 80 15.3726 80 22V58C80 64.6274 74.6274 70 68 70H12C5.37258 70 0 64.6274 0 58V22Z"
      :fill="folder.color" />
     <rect x="19" y="40" width="42" height="6" rx="3" fill="white" style="curentColor" />
    </svg>
   </div>

   <button class="button-color-selection-folder">
    <img src="@/assets/img/icon-more.svg" alt="" />
   </button>
  </div>

  <div :class="['card-folder-text-info', { expanded: props.expanded }]">
   <div class="name-folders-and-notes">{{ props.folder.title }}</div>
   <div class="number-notes-in-folder-and-notes">{{ props.folder.quantity }}</div>
  </div>
 </div>
</template>

<style scoped>
.card-folder-visual-content {
 display: flex;
 flex-direction: row;
 align-items: flex-start;
 gap: 0 1rem;
 height: 4rem;
}

.card-folder-visual-content.expanded {
 /* align-items: center; */
 justify-content: space-between;
}

.card-folder-inited-icon-and-text-info {
 display: flex;
 flex-direction: row;
 align-items: center;
 gap: 0 1.5rem;
}

.button-color-selection-folder {
 border: none;
 background-color: transparent;
}

.button-color-selection-folder svg {
 max-width: 2rem;
 width: 100%;
}

.card-folder-text-info {
 display: flex;
 flex-direction: column;
 margin-top: 10px;
}

.card-folder-text-info.expanded {
 display: none;
}

.folder-icon svg {
 max-width: 5rem;
 width: 100%;
}

.folder-icon.expanded {
 display: none;
}

.folder-icon-expanded {
 max-width: 3.5rem;
 width: 100%;
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

@container (max-width: 120px) {
 .card-folders-and-notes .name-folders-and-notes {
  font-size: 14px;
 }

 .card-folders-and-notes .number-notes-in-folder-and-notes {
  font-size: 12px;
 }
}
</style>
