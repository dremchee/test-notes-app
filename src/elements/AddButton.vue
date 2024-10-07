<script setup lang="ts">
import { ref } from 'vue';

const isDropdownOpen = ref(false);

const toggleDropDown = () => {
 console.log('click');
 isDropdownOpen.value = !isDropdownOpen.value;
}

</script>

<template>
 <div class="add-button-container">
  <div class="dropbutton-box">
   <button class="dropdown-btn" @click="toggleDropDown"></button>
  </div>
  <div class="dropdown-container" v-show="isDropdownOpen">
   <div class="dropdown">
    <a href="#" class=" select-folder">
     <img src="@/src/assets/img/mini-icon-folder.svg">
    </a>
    <a href="#" class="select-document-padding select-document">
     <img src="@/src/assets/img/mini-icon-document.svg">
    </a>
   </div>
  </div>
 </div>
</template>

<style scoped>
.add-button-container {
 margin-top: 7rem;
 position: relative;
 display: inline-flex;
}

.dropdown-btn {
 width: 5rem;
 height: 5rem;
 border-radius: 50%;
 background-color: var(--color-blue);
 border: none;
 cursor: pointer;
 background-image: url("@/src/assets/img/plus-icon.svg");
 background-repeat: no-repeat;
 background-position: center;
}

.select-folder {
 background-repeat: no-repeat;
 background-position: center;
}

.select-document {
 background-repeat: no-repeat;
 background-position: center;
}

.dropdown-container {
 position: absolute;
 display: flex;
 box-sizing: border-box;
 justify-content: center;
 align-items: center;
 bottom: 6rem;
 width: 5rem;
 height: 8.6rem;
 background-color: var(--color-white);
 z-index: 10;
 border-radius: 40px;
}

/* .dropdown {
 position: absolute;
 width: 3.25rem; */
/* display: none; */
/* bottom: 6rem; */
/* z-index: 10;
} */

.dropdown a {
 width: 3.25rem;
 height: 3.25rem;
 text-decoration: none;
 display: flex;
 align-items: center;
 justify-content: center;
}

.select-document-padding {
 padding: 3px;
}

.dropdown a:hover {
 background-color: var(--color-very-light-grey);
 border-radius: 50%;
}
</style>