<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
  expanded: Boolean,
});
</script>

<template>
  <div class="folder-box-container" :class="{ 'expanded-container': expanded }">
    <div v-if="expanded" class="expanded-folder-box-contant">
      <img class="expanded-folder-icon" src="@/src/assets/img/mini-blue-folder-icon.svg" alt="">
      <div class="expanded-folder-text">
        <div class="name-folder">Project folder</div>
        <div class="quantity-notes">10 notes</div>
      </div>
      <button class="button-folder-drop-list">
        <img class="folder-drop-list" src="@/src/assets/img/icon-more.svg" alt="">
      </button>
    </div>

    <div v-else class="folder-box">
      <div class=" folder-box-img-container">
        <img class="folder-icon" src="@/src/assets/img/blue-folder.svg" alt="">
        <button class="button-folder-drop-list">
          <img class="folder-drop-list" src="@/src/assets/img/icon-more.svg" alt="">
        </button>
      </div>

      <div class="folder-text">
        <div class="name-folder name-folder-small">Project folder</div>
        <div class="quantity-notes">10 notes</div>
      </div>
    </div>


    <div v-if="expanded" class="expanded-folder-box-contant">
      <img class="expanded-folder-icon" src="@/src/assets/img/mini-green-folder-icon.svg" alt="">
      <div class="expanded-folder-text">
        <div class="name-folder">Project folder so ...</div>
        <div class="quantity-notes">10 notes</div>
      </div>
      <button class="button-folder-drop-list">
        <img class="folder-drop-list" src="@/src/assets/img/icon-more.svg" alt="">
      </button>
    </div>

    <div v-else class="folder-box">
      <div class=" folder-box-img-container">
        <img class="folder-icon" src="@/src/assets/img/green-folder.svg" alt="">
        <button class="button-folder-drop-list">
          <img class="folder-drop-list" src="@/src/assets/img/icon-more.svg" alt="">
        </button>
      </div>

      <div class="folder-text">
        <div class="name-folder name-folder-small">Project folder so ...</div>
        <div class="quantity-notes">10 notes</div>
      </div>
    </div>

    <div v-if="expanded" class="expanded-folder-box-contant">
      <img class="expanded-folder-icon" src="@/src/assets/img/mini-violet-folder-icon.svg" alt="">
      <div class="expanded-folder-text">
        <div class="name-folder">Project folder</div>
        <div class="quantity-notes">10 notes</div>
      </div>
      <button class="button-folder-drop-list">
        <img class="folder-drop-list" src="@/src/assets/img/icon-more.svg" alt="">
      </button>
    </div>

    <div v-else class="folder-box">
      <div class=" folder-box-img-container">
        <img class="folder-icon" src="@/src/assets/img/violet-folder.svg" alt="">
        <button class="button-folder-drop-list">
          <img class="folder-drop-list" src="@/src/assets/img/icon-more.svg" alt="">
        </button>
      </div>

      <div class="folder-text">
        <div class="name-folder name-folder-small">Project folder</div>
        <div class="quantity-notes">10 notes</div>
      </div>
    </div>

    <div v-if="expanded" class="expanded-folder-box-contant">
      <img class="expanded-folder-icon" src="@/src/assets/img/mini-red-folder-icon.svg" alt="">
      <div class="expanded-folder-text">
        <div class="name-folder">Project folder</div>
        <div class="quantity-notes">10 notes</div>
      </div>
      <button class="button-folder-drop-list">
        <img class="folder-drop-list" src="@/src/assets/img/icon-more.svg" alt="">
      </button>
    </div>

    <div v-else class="folder-box">
      <div class=" folder-box-img-container">
        <img class="folder-icon" src="@/src/assets/img/red-folder.svg" alt="">
        <button class="button-folder-drop-list">
          <img class="folder-drop-list" src="@/src/assets/img/icon-more.svg" alt="">
        </button>
      </div>

      <div class="folder-text">
        <div class="name-folder name-folder-small">Project folder</div>
        <div class="quantity-notes">10 notes</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.folder-box-container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 0 2rem;
  gap: 1rem 20px;
  margin-top: 20px;
}

.expanded-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
  gap: 1.25rem 0rem;
  margin-top: 20px;
}

.folder-box {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 10.3rem;
  height: 10.3rem;
  background-color: var(--color-white);
  border-radius: 24px;
  padding: 16px 20px;
  overflow: hidden;
}

.expanded-folder-box-contant {
  /* position: relative; */
  width: 100%;
  height: 7rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-white);
  border-radius: 24px;
  padding: 16px 20px;
}

.folder-box-img-container {
  /* position: absolute; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: start;
}

/* .expanded-folder-icon {
  display: flex;
  align-items: center;
} */

.button-folder-drop-list {
  /* display: inline-flex;
  align-items: start; */
  border: none;
  background-color: transparent;
  width: 2rem;
  height: 2rem;
}

/* .expanded-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
} */

.folder-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}

.expanded-folder-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 15rem;
  padding: 0 1.5rem;
  /* margin-right: 2rem; */
}

.name-folder {
  /* padding-top: 24px; */
  font-size: 20px;
  font-weight: 600;
  color: var(--color-grey);
}

.name-folder-small {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  line-clamp: 1;
}

.expanded-name-folder {
  font-weight: 600;
  color: var(--color-grey);
}

.quantity-notes {
  font-size: 14px;
  color: var(--color-almost-very-light-grey);
}
</style>