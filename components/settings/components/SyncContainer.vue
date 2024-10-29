<script setup lang="ts"></script>

<template>
 <div class="sync-container">
  <div class="sync-text">Synchronization</div>
  <div class="sync-switch-button">
   <label class="switch">
    <input type="checkbox">
    <span class="move"></span>
   </label>
  </div>
 </div>
</template>

<style scoped>
.sync-container {
 display: inline-flex;
 padding: 0 2rem;
 margin-top: 1.75rem;
 justify-content: space-between;
 width: 100%;
 height: 1.875rem;
 align-items: center;
}

.sync-text {
 font-size: 20px;
 font-weight: 500;
 color: var(--color-grey);
}

.switch {
 position: relative;
 display: inline-block;
 height: 1.875rem;
 width: 3.75rem;
}

.switch input {
 opacity: 1;
 width: 0;
 height: 0;
}

.move {
 position: absolute;
 top: 0;
 left: 0;
 right: 0;
 bottom: 0;
 cursor: pointer;
 background-color: var(--color-almost-very-light-grey);
 border-radius: 1.25rem;
 transition: 0.3s;
}

.move::before {
 content: '';
 position: absolute;
 background-color: var(--color-white);
 width: 1.125rem;
 height: 1.125rem;
 border-radius: 50%;
 top: 0.375rem;
 bottom: 0.375rem;
 left: 0.375rem;
 transition: 0.5s;
}

input:checked+.move {
 background: var(--color-blue);
}

input:checked+.move::before {
 transform: translateX(1.9rem);
}
</style>