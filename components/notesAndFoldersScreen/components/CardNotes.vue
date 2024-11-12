<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
 expanded: Boolean,
 note: {
  type: Object,
  required: true,
 }
});
</script>

<template>
 <nuxt-link to="/noteWithOnlyText" class="card-folders-and-notes card-folders-and-notes-witout-underscores">
  <div :class="['card-note-visual-content', { expanded: props.expanded }]">
   <div class="name-folders-and-notes name-folders-and-notes-line-restriction">{{ note.title }}</div>
   <div class="number-notes-in-folder-and-notes">{{ note.date }}</div>
  </div>
 </nuxt-link>

 <nuxt-link to="/noteWithCheckbox" class="card-folders-and-notes card-folders-and-notes-witout-underscores">
  <div :class="['card-note-visual-content', { expanded: props.expanded }]">
   <div class="name-folders-and-notes name-folders-and-notes-line-restriction">{{ note.title }}</div>
   <div class="number-notes-in-folder-and-notes">{{ note.date }}</div>
  </div>
 </nuxt-link>

 <nuxt-link to="/noteWithImg" class="card-folders-and-notes card-folders-and-notes-witout-underscores">
  <div :class="['card-note-visual-content', { expanded: props.expanded }]">
   <div class="name-folders-and-notes name-folders-and-notes-line-restriction">{{ note.title }}</div>
   <div class="number-notes-in-folder-and-notes">{{ note.date }}</div>
  </div>
 </nuxt-link>

 <nuxt-link to="/noteWithVoiceMessage" class="card-folders-and-notes card-folders-and-notes-witout-underscores">
  <div :class="['card-note-visual-content', { expanded: props.expanded }]">
   <div class="name-folders-and-notes name-folders-and-notes-line-restriction">{{ note.title }}</div>
   <div class="number-notes-in-folder-and-notes ">{{ note.date }}</div>
  </div>
 </nuxt-link>
</template>

<style scoped>
.card-folders-and-notes-witout-underscores {
 text-decoration: none;
}

.card-note-visual-content {
 display: flex;
 flex-direction: column;
 gap: 3px 0;
}

.card-note-visual-content.expanded {
 gap: 3px 0;
}

.name-folders-and-notes-line-restriction {
 -webkit-line-clamp: 3;
}
</style>