<script setup lang="ts"></script>

<template>
 <div class="profile-information-container">
  <div class="profile-information-content">
   <img src="@/assets/img/profile-image.svg" class="profile-image">

   <div class="profile-information-text-info">
    <div class="profile-information-title">Manager user</div>
    <div class="update-information">Last update: September 12, 2024</div>
   </div>
  </div>
 </div>
</template>

<style scroped>
.profile-information-container {
 padding: 0 2rem;
 margin-top: 2.4375rem;
}

.profile-information-content {
 box-shadow: 0 8px 20px 0px rgba(0, 0, 0, 0.1);
 display: inline-flex;
 align-items: center;
 width: 100%;
 background-color: var(--color-white-and-grey);
 min-height: 6.25rem;
 border-radius: 24px;
 padding: 1rem 1rem;
 gap: 0 1.375rem;
}

.profile-image {
 width: 4.25rem;
 height: 4.25rem;
 border-radius: 50%;
}

.profile-information-text-info {
 display: flex;
 flex-direction: column;
 gap: 6px 0px;
}

.profile-information-title {
 font-size: 24px;
 font-weight: 500;
 color: var(--color-grey);
}

.update-information {
 font-size: 14px;
 color: var(--color-almost-very-light-grey);
}
</style>