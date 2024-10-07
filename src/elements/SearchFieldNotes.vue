<script setup lang="ts"></script>

<template>
 <input class="search-field-notes icon" type="text" placeholder="Search">
</template>

<style scoped>
.search-field-notes {
 width: 15rem;
 height: 2rem;
 border-radius: 10px;
 background-color: var(--color-white);
 color: var(--color-grey);
 padding-left: 2.5rem;
}

.search-field-notes.icon {
 background-image: url("@/src/assets/img/search-notes-icon.svg");
 background-repeat: no-repeat;
 background-position: 0.5rem;
}
</style>