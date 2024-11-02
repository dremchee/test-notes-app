<script setup lang="ts">
import BackButton from '@/components/globalComponents/BackButton.vue';

import IconTrash from '@/assets/img/icon-trash.svg';
</script>

<template>
  <div class="note-header-container">
    <BackButton to="/" />

    <div class="note-header-content-management">
      <button class="back-content-button">
        <svg class="icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10.6667 9.33337V14.6667L2.66667 8.00004L10.6667 1.33337V6.66671H17.3333C20.1623 6.66671 22.8754 7.79051 24.8758 9.7909C26.8762 11.7913 28 14.5044 28 17.3334C28 20.1623 26.8762 22.8755 24.8758 24.8758C22.8754 26.8762 20.1623 28 17.3333 28H5.33333V25.3334H17.3333C19.4551 25.3334 21.4899 24.4905 22.9902 22.9902C24.4905 21.4899 25.3333 19.4551 25.3333 17.3334C25.3333 15.2116 24.4905 13.1768 22.9902 11.6765C21.4899 10.1762 19.4551 9.33337 17.3333 9.33337H10.6667Z"
            fill="#BABEC7" style="currentColor" />
        </svg>
      </button>

      <button class="next-content-button">
        <svg class="icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M21.3333 9.33337H14.6667C12.5449 9.33337 10.5101 10.1762 9.00981 11.6765C7.50952 13.1768 6.66667 15.2116 6.66667 17.3334C6.66667 19.4551 7.50952 21.4899 9.00981 22.9902C10.5101 24.4905 12.5449 25.3334 14.6667 25.3334H26.6667V28H14.6667C11.8377 28 9.12458 26.8762 7.12419 24.8758C5.12381 22.8755 4 20.1623 4 17.3334C4 14.5044 5.12381 11.7913 7.12419 9.7909C9.12458 7.79051 11.8377 6.66671 14.6667 6.66671H21.3333V1.33337L29.3333 8.00004L21.3333 14.6667V9.33337Z"
            fill="#BABEC7" style="currentColor" />
        </svg>
      </button>

      <button class="trash-button">
        <img class="icon-trash" :src="IconTrash">
      </button>
    </div>
  </div>
</template>

<style scoped>
.note-header-container {
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--color-background);
  display: flex;
  flex-direction: row;
  padding: 0 2rem;
  height: 5rem;
  width: 100%;
  align-items: center;
  justify-content: space-between;
}

.note-header-content-management {
  display: flex;
  gap: 0rem 1.5rem;
}

button {
  border: none;
  background-color: transparent;
  cursor: pointer;
}

.icon:hover path {
  fill: black;
  transition: fill 0.4s ease-in-out;
}
</style>