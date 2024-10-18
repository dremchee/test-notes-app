<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
 expanded: Boolean,
})
</script>

<template>
 <div class="notes-box-container" :class="{ 'expanded-notes-container': expanded }">
  <div v-if="expanded" class="expanded-notes-box">
   <div class="title-notes">Lorem ipsum dolor sit amet</div>
   <div class="notes-date-create">September 12, 2024</div>
  </div>

  <div v-else class="notes-box">
   <div class="title-notes title-notes-small">Lorem ipsum dolor sit amet</div>
   <div class="notes-date-create">September 12, 2024</div>
  </div>

  <div v-if="expanded" class="expanded-notes-box">
   <div class="title-notes">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ...</div>
   <div class="notes-date-create">September 12, 2024</div>
  </div>

  <div v-else class="notes-box">
   <div class="title-notes title-notes-small">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ...</div>
   <div class="notes-date-create">September 12, 2024</div>
  </div>

  <div v-if="expanded" class="expanded-notes-box">
   <div class="title-notes">Lorem ipsum dolor sit amet</div>
   <div class="notes-date-create">September 12, 2024</div>
  </div>

  <div v-else class="notes-box">
   <div class="title-notes title-notes-small">Lorem ipsum dolor sit amet</div>
   <div class="notes-date-create">September 12, 2024</div>
  </div>

  <div v-if="expanded" class="expanded-notes-box">
   <div class="title-notes">Lorem ipsum dolor sit amet</div>
   <div class="notes-date-create">September 12, 2024</div>
  </div>

  <div v-else class="notes-box">
   <div class="title-notes title-notes-small">Lorem ipsum dolor sit amet</div>
   <div class="notes-date-create">September 12, 2024</div>
  </div>

  <div v-if="expanded" class="expanded-notes-box">
   <div class="title-notes">Lorem ipsum dolor sit amet</div>
   <div class="notes-date-create">September 12, 2024</div>
  </div>

  <div v-else class="notes-box">
   <div class="title-notes title-notes-small">Lorem ipsum dolor sit amet</div>
   <div class="notes-date-create">September 12, 2024</div>
  </div>

  <div v-if="expanded" class="expanded-notes-box">
   <div class="title-notes">Lorem ipsum dolor sit amet</div>
   <div class="notes-date-create">September 12, 2024</div>
  </div>

  <div v-else class="notes-box">
   <div class="title-notes title-notes-small">Lorem ipsum dolor sit amet</div>
   <div class="notes-date-create">September 12, 2024</div>
  </div>
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
 flex-direction: column;
 justify-content: space-around;
 min-height: 6.4375rem;
 width: 10.9375rem;
 border-radius: 1.5rem;
 background-color: var(--color-white);
 padding: 1rem 1.25rem;
}

.expanded-notes-box {
 display: flex;
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
}
</style>