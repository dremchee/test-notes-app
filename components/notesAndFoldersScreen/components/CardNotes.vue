<script setup lang="ts">
import { defineProps } from 'vue';
import { string } from 'zod';

const props = defineProps({
 expanded: Boolean,
 note: {
  type: Object,
  required: true,
 },
 dateChanged: {
  type: String,
  required: false,
 },
});

console.log(props.note.to);

</script>

<template>
 <nuxt-link :to="note.to" class="card-folders-and-notes card-folders-and-notes-witout-underscores">
  <div :class="['card-note-visual-content', { expanded: props.expanded }]">
   <div class="name-folders-and-notes name-folders-and-notes-line-restriction">{{ note.title }}</div>
   <div class="number-notes-in-folder-and-notes">{{ note.dateChanged || note.dateCreated }}</div>
  </div>
 </nuxt-link>

 <!-- <nuxt-link to="/noteWithCheckbox" class="card-folders-and-notes card-folders-and-notes-witout-underscores">
  <div :class="['card-note-visual-content', { expanded: props.expanded }]">
   <div class="name-folders-and-notes name-folders-and-notes-line-restriction">{{ note.title }}</div>
   <div class="number-notes-in-folder-and-notes">{{ note.dateChanged || note.dateCreated }}</div>
  </div>
 </nuxt-link>

 <nuxt-link to="/noteWithImg" class="card-folders-and-notes card-folders-and-notes-witout-underscores">
  <div :class="['card-note-visual-content', { expanded: props.expanded }]">
   <div class="name-folders-and-notes name-folders-and-notes-line-restriction">{{ note.title }}</div>
   <div class="number-notes-in-folder-and-notes">{{ note.dateChanged || note.dateCreated }}</div>
  </div>
 </nuxt-link>

 <nuxt-link to="/noteWithVoiceMessage" class="card-folders-and-notes card-folders-and-notes-witout-underscores">
  <div :class="['card-note-visual-content', { expanded: props.expanded }]">
   <div class="name-folders-and-notes name-folders-and-notes-line-restriction">{{ note.title }}</div>
   <div class="number-notes-in-folder-and-notes ">{{ note.dateChanged || note.dateCreated }}</div>
  </div>
 </nuxt-link> -->
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