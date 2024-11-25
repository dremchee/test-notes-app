<script setup lang="ts"></script>

<template>
 <div class="container-for-data-entry">
  <div class="text-info ">Login</div>
  <div class="input-container">
   <input type="email" placeholder="Enter login">
  </div>

  <div class="text-info text-info-password">Password</div>
  <div class="input-container">
   <input type="password" placeholder="Enter password">
  </div>
 </div>
</template>

<style scoped>
.container-for-data-entry {
 margin-top: 2.125rem;
 padding: 0 2rem;
 display: flex;
 flex-direction: column;
}

.text-info {
 font-weight: 500;
 color: var(--color-almost-very-light-grey);
}

.text-info-password {
 margin-top: 1.5rem;
}

.input-container {
 height: 3.5rem;
 width: 100%;
 margin-top: 10px;
}

input {
 width: 100%;
 height: 3.5rem;
 border: 1px solid var(--color-light-grey-white);
 border-radius: 12px;
 font-size: var(--font-size-20);
 font-weight: 500;
 color: var(--color-grey);
 padding-left: 1rem;
 background-color: var(--color-white-and-grey);
}

::placeholder {
 font-size: var(--font-size-20);
 font-weight: 500;
 color: var(--color-almost-very-light-grey);
}
</style>