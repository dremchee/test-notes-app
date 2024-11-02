<script setup lang="ts">
// import IconFont from '@/assets/img/icon-font.svg';
// import IconImage from '@/assets/img/icon-image.svg';
// import IconMic from '@/assets/img/icon-mic.svg';
// import IconMarker from '@/assets/img/icon-marker.svg';
// import IconMore from '@/assets/img/icon-more.svg'; 
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
  /* padding-bottom: 2rem; */
}

.note-footer-tools-menu {
  display: flex;
  background-color: var(--color-white);
  /* height: 5rem; */
  border-radius: 2.5rem;
  width: 100%;
  padding: 1.5rem 2rem;
  align-items: center;
  justify-content: space-between;
  /* gap: 0 0.5rem; */
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