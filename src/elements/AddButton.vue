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
    <div class="add-button">
      <div class="dropbutton-box">
        <button class="dropdown-btn" @click="toggleDropDown"></button>
      </div>
      <div class="dropdown-container" v-show="isDropdownOpen">
        <div class="dropdown">
          <a href="#" class=" select">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12.414 5H21C21.2652 5 21.5196 5.10536 21.7071 5.29289C21.8946 5.48043 22 5.73478 22 6V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3H10.414L12.414 5ZM20 11H4V19H20V11ZM20 9V7H11.586L9.586 5H4V9H20Z"
                fill="currentColor" />
            </svg>
          </a>
          <a href="#" class="select-document-padding select">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20 22H4C3.73478 22 3.48043 21.8946 3.29289 21.7071C3.10536 21.5196 3 21.2652 3 21V3C3 2.73478 3.10536 2.48043 3.29289 2.29289C3.48043 2.10536 3.73478 2 4 2H20C20.2652 2 20.5196 2.10536 20.7071 2.29289C20.8946 2.48043 21 2.73478 21 3V21C21 21.2652 20.8946 21.5196 20.7071 21.7071C20.5196 21.8946 20.2652 22 20 22ZM19 20V4H5V20H19ZM8 7H16V9H8V7ZM8 11H16V13H8V11ZM8 15H13V17H8V15Z"
                fill="currentColor" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.add-button-container {
  position: sticky;
  bottom: 0;
  width: 100%;
  z-index: 20;
}

.add-button {
  display: inline-flex;
  width: 100%;
  position: relative;
  justify-content: flex-end;
  padding: 20px 40px;
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
  bottom: 8rem;
  width: 5rem;
  height: 8.6rem;
  background-color: var(--color-white);
  z-index: 10;
  border-radius: 40px;
}

svg path {
  fill: var(--color-grey)
}

.select:hover svg path {
  fill: var(--color-blue);
}

/* .dropdown {position: absolute; */
/* width: 3.25rem; */

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