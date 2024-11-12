<scrip setup lang="ts"></scrip>

<template>
 <div class="note-content-container">
  <slot />
 </div>
</template>

<style scoped>
.note-content-container {
 display: flex;
 flex-direction: column;
 padding: 0 2rem;
 padding-top: 5rem;
 padding-bottom: 7rem;
 margin-top: 1.31rem;
 flex-grow: 1;
}
</style>