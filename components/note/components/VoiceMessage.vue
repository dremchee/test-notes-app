<script setup lang="ts">
import { ref } from 'vue';

const isClickedButton = ref(false);

const clickButton = () => {
  isClickedButton.value = !isClickedButton.value;
}

</script>

<template>
  <div class="voice-message-conatiner">
    <div class="voice-massage-content">
      <button @click="clickButton" class="voice-message-button">
        <template v-if="isClickedButton">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 6.66663H10.6667V25.3333H8V6.66663ZM21.3333 6.66663H24V25.3333H21.3333V6.66663Z" fill="#336CED"
              style="fill:#336CED;" />
          </svg>

        </template>
        <template v-else>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M25.8347 16.5547L11.7027 25.976C11.6023 26.0428 11.4856 26.0811 11.3652 26.0869C11.2447 26.0927 11.125 26.0656 11.0187 26.0087C10.9124 25.9518 10.8235 25.8671 10.7615 25.7637C10.6995 25.6602 10.6667 25.5419 10.6667 25.4213V6.57868C10.6667 6.45809 10.6995 6.33977 10.7615 6.23633C10.8235 6.1329 10.9124 6.04821 11.0187 5.99129C11.125 5.93437 11.2447 5.90735 11.3652 5.91312C11.4856 5.91888 11.6023 5.9572 11.7027 6.02401L25.8347 15.4453C25.926 15.5062 26.0008 15.5887 26.0526 15.6855C26.1044 15.7822 26.1315 15.8903 26.1315 16C26.1315 16.1098 26.1044 16.2178 26.0526 16.3146C26.0008 16.4113 25.926 16.4938 25.8347 16.5547Z"
              fill="#BABEC7" style="fill:#BABEC7;fill:color(display-p3 0.7290 0.7457 0.7792);fill-opacity:1;" />
          </svg>
        </template>
      </button>
      <div class="voice-message-sound-wave-container">
        <div class="voice-message-sound-wave" v-if="isClickedButton">
          <img src="@/assets/img/moving-sound-wave.svg" alt="">
        </div>
        <div class="voice-message-sound-wave" v-else>
          <img src="@/assets/img/sound-wave-img.svg" alt="">
        </div>
      </div>
      <div class="voice-message-timer">01:12</div>
    </div>
  </div>
</template>

<style scoped>
.voice-message-conatiner {
  display: flex;
  flex-direction: column;
  /* align-content: flex-start; */
  gap: 1.25rem 0rem;
  width: 100%;
  height: 5rem;
  /* padding: 0 2rem; */
}

.voice-massage-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 5rem;
  background-color: var(--color-white);
  padding: 1.0625rem 1.25rem;
  border-radius: 2.5rem;
}

.voice-message-button {
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  width: 2.875rem;
  height: 2.875rem;
  border-radius: 50%;
}

.voice-message-timer {
  font-weight: 500;
  color: var(--color-almost-very-light-grey)
}
</style>