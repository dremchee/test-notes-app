<script setup lang="ts">

import { defineProps, ref, onMounted } from 'vue';

const maxHeight = 80;
const shouldClamp = ref(false);

defineProps({
 expanded: Boolean,
});

const checkClamping = (el: HTMLElement) => {
 if (el.scrollHeight > maxHeight) {
  shouldClamp.value = true;
 }
}

onMounted(async () => {
 await nextTick();
 const notesBoxes = document.querySelectorAll('.title-notes-small') as NodeListOf<HTMLElement>;
 notesBoxes.forEach((box) => checkClamping(box));
})
</script>

<template>
 <div class="notes-box-container" :class="{ 'expanded-notes-container': expanded }">
  <nuxt-link to="/noteWithOnlyText" v-if="expanded" class="expanded-notes-box">
   <div class="title-notes">Lorem ipsum dolor sit amet</div>
   <div class="notes-date-create">September 12, 2024</div>
  </nuxt-link>

  <nuxt-link to="/noteWithOnlyText" v-else class="notes-box" :class="{ 'clamped': shouldClamp }">
   <div class="title-notes title-notes-small">Lorem ipsum dolor sit amet</div>
   <div class="notes-date-create">September 12, 2024</div>
  </nuxt-link>

  <nuxt-link to="/noteWithCheckBox" v-if="expanded" class="expanded-notes-box">
   <div class="title-notes">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ...</div>
   <div class="notes-date-create">September 12, 2024</div>
  </nuxt-link>

  <nuxt-link to="/noteWithCheckBox" v-else class="notes-box" :class="{ 'clamped': shouldClamp }">
   <div class="title-notes title-notes-small">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ...</div>
   <div class="notes-date-create">September 12, 2024</div>
  </nuxt-link>

  <nuxt-link to="/noteWithImg" v-if="expanded" class="expanded-notes-box">
   <div class="title-notes">Lorem ipsum dolor sit amet</div>
   <div class="notes-date-create">September 12, 2024</div>
  </nuxt-link>

  <nuxt-link to="/noteWithImg" v-else class="notes-box" :class="{ 'clamped': shouldClamp }">
   <div class="title-notes title-notes-small">Lorem ipsum dolor sit amet</div>
   <div class="notes-date-create">September 12, 2024</div>
  </nuxt-link>

  <nuxt-link to="/noteWithVoiceMessage" v-if="expanded" class="expanded-notes-box">
   <div class="title-notes">Lorem ipsum dolor sit amet</div>
   <div class="notes-date-create">September 12, 2024</div>
  </nuxt-link>

  <nuxt-link to="/noteWithVoiceMessage" v-else class="notes-box" :class="{ 'clamped': shouldClamp }">
   <div class="title-notes title-notes-small">Lorem ipsum dolor sit amet</div>
   <div class="notes-date-create">September 12, 2024</div>
  </nuxt-link>

  <nuxt-link to="" v-if="expanded" class="expanded-notes-box">
   <div class="title-notes">Lorem ipsum dolor sit amet</div>
   <div class="notes-date-create">September 12, 2024</div>
  </nuxt-link>

  <nuxt-link to="" v-else class="notes-box" :class="{ 'clamped': shouldClamp }">
   <div class="title-notes title-notes-small">Lorem ipsum dolor sit amet</div>
   <div class="notes-date-create">September 12, 2024</div>
  </nuxt-link>

  <div v-if="expanded" class="expanded-notes-box">
   <div class="title-notes">Lorem ipsum dolor sit amet</div>
   <div class="notes-date-create">September 12, 2024</div>
  </div>

  <nuxt-link to="" v-else class="notes-box" :class="{ 'clamped': shouldClamp }">
   <div class="title-notes title-notes-small">Lorem ipsum dolor sit amet</div>
   <div class="notes-date-create">September 12, 2024</div>
  </nuxt-link>

  <div v-if="expanded" class="expanded-notes-box">
   <div class="title-notes">Lorem ipsum dolor sit amet</div>
   <div class="notes-date-create">September 12, 2024</div>
  </div>

  <nuxt-link to="" v-else class="notes-box" :class="{ 'clamped': shouldClamp }">
   <div class="title-notes title-notes-small">Lorem ipsum dolor sit amet</div>
   <div class="notes-date-create">September 12, 2024</div>
  </nuxt-link>
 </div>
</template>

<style scoped>
.notes-box-container {
 display: flex;
 width: 100%;
 flex-wrap: wrap;
 gap: 1rem 20px;
 margin-top: 20px;
 padding: 0px 40px;
 align-items: flex-start;
}

.expanded-notes-container {
 display: flex;
 width: 100%;
 padding: 0px 40px;
 gap: 1.25rem 0rem;
 height: 100vh;
 flex-direction: column;
 margin-top: 20px;
}

.notes-box {
 display: flex;
 text-decoration: none;
 flex-direction: column;
 justify-content: space-around;
 min-height: 6.4375rem;
 width: 10.3rem;
 border-radius: 1.5rem;
 background-color: var(--color-white);
 padding: 1rem 1.25rem;
 height: auto;
 overflow: hidden;
}

.expanded-notes-box {
 display: flex;
 text-decoration: none;
 flex-direction: column;
 justify-content: center;
 padding: 1rem 1.25rem;
 min-height: 4.9375rem;
 width: 100%;
 background-color: var(--color-white);
 border-radius: 1.5rem;
}

.title-notes {
 font-weight: 600;
 font-size: 20px;
 color: var(--color-grey);
 gap: 6px 0px;
}

.notes-date-create {
 font-size: 14px;
 color: var(--color-almost-very-light-grey);
}

.title-notes-small {
 max-height: 5rem;
 overflow: hidden;
 text-overflow: ellipsis;
 /* white-space: pre-wrap; */
 display: -webkit-box;
 -webkit-box-orient: vertical;
 line-clamp: auto;
 transition: -webkit-line-clamp 0.2s ease-in-out;
}

.clamped .title-notes-small {
 -webkit-line-clamp: 3;
 line-clamp: 3;
}
</style>