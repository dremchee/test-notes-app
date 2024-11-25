<script setup lang="ts">
import { ref } from 'vue';

const isClickedButton = ref(false);

const clickButton = () => {
  isClickedButton.value = !isClickedButton.value;
}

</script>

<template>
  <div class="voice-massege-container">
    <div :class="['voice-massege-button-container', { clicked: isClickedButton }]">
      <button @click="clickButton" class="voice-message-button">
        <img v-if="isClickedButton" class="voice-message-button-pause" src="@/assets/img/icon-pause.svg" alt="">
        <img v-else class="voice-message-button-play" src="@/assets/img/icon-play.svg" alt="">
      </button>
    </div>
    <div class="voice-massege-sound-wave-container">
      <img v-if="isClickedButton" src="@/assets/img/moving-sound-wave.svg" alt="">
      <img v-else src="@/assets/img/sound-wave-img.svg" alt="">
    </div>
    <div class="voice-massege-time">01:12</div>
  </div>
</template>

<style scoped>
.voice-massege-container {
  display: flex;
  align-items: center;
  flex-direction: row;
  background-color: var(--color-white);
  width: 100%;
  height: 5rem;
  border-radius: 2.5rem;
  justify-content: space-between;
  gap: 0 1rem;
  padding: 0 1.4rem;
  box-shadow: 0 12px 40px 0 rgba(0, 0, 0, 0.1);
}

.voice-massege-button-container button {
  border: none;
  border-radius: 50%;
  width: 2.8rem;
  height: 2.8rem;
  cursor: pointer;
  background-color: var(--color-background);
}

.voice-massege-button-container.clicked button {
  background-color: rgba(51, 108, 237, 0.2);
}

.voice-massege-sound-wave-container {
  display: flex;
  flex-grow: 1;
  width: 100%;
}

.voice-massege-sound-wave-container img {
  max-height: 3rem;
  width: 100%;
}

.voice-massege-time {
  font-size: var(--font-size-14);
  font-weight: 500;
  color: var(--color-almost-very-light-grey);
}
</style>