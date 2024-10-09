<script setup lang="ts"></script>

<template>
 <div class="folder-box-container">
  <div class="folder-box">
   <div class="folder-box-img-container">
    <img class="folder-icon" src="@/src/assets/img/blue-folder.svg" alt="">
    <img class="folder-drop-list" src="@/src/assets/img/icon-more.svg" alt="">
   </div>
   <div class="name-folder">Project folder</div>
   <div class="quantity-notes">10 notes</div>
  </div>
  <div class="folder-box">
   <div class="folder-box-img-container">
    <img class="folder-icon" src="@/src/assets/img/green-folder.svg" alt="">
    <img class="folder-drop-list" src="@/src/assets/img/icon-more.svg" alt="">
   </div>
   <div class="name-folder">Project folder</div>
   <div class="quantity-notes">10 notes</div>
  </div>
  <div class="folder-box">
   <div class="folder-box-img-container">
    <img class="folder-icon" src="@/src/assets/img/violet-folder.svg" alt="">
    <img class="folder-drop-list" src="@/src/assets/img/icon-more.svg" alt="">
   </div>
   <div class="name-folder">Project folder</div>
   <div class="quantity-notes">10 notes</div>
  </div>
  <div class="folder-box">
   <div class="folder-box-img-container">
    <img class="folder-icon" src="@/src/assets/img/red-folder.svg" alt="">
    <img class="folder-drop-list" src="@/src/assets/img/icon-more.svg" alt="">
   </div>
   <div class="name-folder">Project folder</div>
   <div class="quantity-notes">10 notes</div>
  </div>
 </div>
</template>

<style scoped>
.folder-box-container {
 width: 100%;
 display: flex;
 flex-wrap: wrap;
 padding: 0 40px;
 gap: 1rem 20px;
}

.folder-box {
 display: flex;
 flex-direction: column;
 width: 10.9375rem;
 height: 10.9375rem;
 background-color: var(--color-white);
 border-radius: 24px;
 padding: 16px 20px;
}

.folder-box-img-container {
 position: relative;
 display: inline-flex;
}

.folder-drop-list {
 position: absolute;
 top: 0;
 right: 0;
}

.name-folder {
 padding-top: 24px;
 font-weight: 600;
 color: var(--color-grey);
}

.quantity-notes {
 font-size: 14px;
 color: var(--color-almost-very-light-grey);
}
</style>