<script setup lang="ts"></script>

<template>
 <div class="search-container">
  <input class="search-field-notes icon" type="text" placeholder="Search">
 </div>
</template>

<style scoped>
.search-container {
 display: flex;
 justify-content: center;
 padding: 25px 2rem;
 width: 100%;
}

.search-field-notes {
 width: 100%;
 border-radius: 100px;
 background-color: var(--color-white);
 color: var(--color-grey);
 height: 4rem;
 line-height: 4rem;
 padding-left: 3.7rem;
 border: 1px solid var(--color-light-grey-white);
}

.search-field-notes::placeholder {
 font-size: 20px;
}

.search-field-notes.icon {
 background-image: url("@/assets/img/search-notes-icon.svg");
 background-repeat: no-repeat;
 background-position: 1.1rem;
}
</style>