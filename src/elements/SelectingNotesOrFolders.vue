<script setup lang="ts">
import NotesIcon from '@/src/assets/img/icon-document.svg'
</script>

<template>
 <div class="selecting-container">
  <a class="selecting selecting-notes">Notes</a>
  <a class="selecting selecting-folders">Folders</a>
 </div>
</template>

<style scoped>
.selecting-container {
 margin-top: 15px;
}

.selecting {
 width: 5rem;
 height: 1.5rem;
 border: 1px solid var(--color-light-grey);
 cursor: pointer;
 background-repeat: no-repeat;
 background-position: 1rem;
 padding: 0.5rem 0.5rem 0.5rem 3.5rem;
}

.selecting-notes {
 background-image: url("@/src/assets/img/mini-icon-document.svg");
}

.selecting-folders {
 background-image: url("@/src/assets/img/mini-icon-folder.svg");
}
</style>