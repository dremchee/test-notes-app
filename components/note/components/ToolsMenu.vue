<script setup lang="ts">
</script>

<template>

  <div class="note-footer">
    <div class="note-footer-tools-menu">
      <button class="note-footer-tools-menu-icon">
        <img src="@/assets/img/icon-font.svg" alt="">
      </button>
      <button class="note-footer-tools-menu-icon">
        <img src="@/assets/img/icon-image.svg" alt="">
      </button>
      <button class="note-footer-tools-menu-icon">
        <img src="@/assets/img/icon-mic.svg" alt="">
      </button>
      <button class="note-footer-tools-menu-icon">
        <img src="@/assets/img/icon-marker.svg" alt="">
      </button>
      <button class="note-footer-tools-menu-icon">
        <img src="@/assets/img/icon-more.svg" alt="">
      </button>
    </div>
  </div>
</template>

<style scoped>
.note-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  container-type: inline-size;
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: auto;
  padding: 0 2rem;
  margin-bottom: 1rem;
}

.note-footer-tools-menu {
  display: flex;
  background-color: var(--color-white);
  border-radius: 2.5rem;
  width: 100%;
  padding: 1.5rem 2rem;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 12px 40px 0 rgba(0, 0, 0, 0.1);
}

.note-footer-tools-menu-icon img {
  max-width: 2rem;
  width: 100%;
}

button {
  display: flex;
  /* gap: 0rem 2rem; */
  border: none;
  background-color: transparent;
}

@container (max-width: 400px) {
  .note-footer-tools-menu {
    padding: 0.75rem 1rem;
    gap: 0 0.5rem;
  }

  .note-footer-tools-menu-icon img {
    max-width: 1.5rem;
    width: 100%;
  }
}
</style>