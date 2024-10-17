<script setup lang="ts"></script>

<template>
  <div class="menu-container">
    <div class="menu-text">Style</div>
    <div class="settings-wrapper">
      <div class="settings-box">
        <div class="menu-settings-text">Font size</div>
        <div class="settings-list-wrapper">
          <ul class="settings-list">
            <li><span href="#">Medium <img class="arrow-dropdown" src="@/src/assets/img/icon-arrow-drop-down.svg"
                  alt="">
              </span>
              <ul>
                <li>
                  <span>Small</span>
                </li>
                <li>
                  <span>Medium</span>
                </li>
                <li>
                  <span>Large</span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="settings-wrapper">
      <div class="settings-box">
        <div class="menu-settings-text">Sort</div>
        <div class="settings-list-wrapper sort-list-wrapper">
          <ul class="settings-list">
            <li><span href="#">Date created <img class="arrow-dropdown" src="@/src/assets/img/icon-arrow-drop-down.svg"
                  alt="">
              </span>
              <ul>
                <li>
                  <span>Date of change</span>
                </li>
                <li>
                  <span>Date created</span>
                </li>
                <li>
                  <span>Title</span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="settings-wrapper">
      <div class="settings-box">
        <div class="menu-settings-text">Theme</div>
        <div class="settings-list-wrapper">
          <ul class="settings-list">
            <li><span href="#">System <img class="arrow-dropdown" src="@/src/assets/img/icon-arrow-drop-down.svg"
                  alt="">
              </span>
              <ul>
                <li>
                  <span>Light</span>
                </li>
                <li>
                  <span>System</span>
                </li>
                <li>
                  <span>Dark</span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>




</template>

<style scoped>
.menu-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 40px;
  margin-top: 1.6875rem;
}

.menu-text {
  font-size: 20px;
  font-weight: 500;
  color: var(--color-almost-very-light-grey);
}

.settings-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 5rem;
  /* height: 2.5rem; */
}

.menu-settings-text {
  font-size: 20px;
  font-weight: 500;
  color: var(--color-grey);
}

.settings-list-wrapper ul li {
  position: relative;
  float: left;
  list-style-type: none;
}

.settings-list-wrapper ul li span {
  display: flex;
  justify-content: flex-start;
  /* flex-direction: column; */
  align-items: center;
  font-size: 20px;
  font-weight: 500;
  color: var(--color-black);
}

.sort-list-wrapper ul li ul {
  position: absolute;
  left: 0;
  width: 9rem;
  display: none;
  background-color: var(--color-white);
  z-index: 0;
}

ul li ul {
  position: absolute;
  left: 0;
  width: 6rem;
  display: none;
  background-color: var(--color-white);
  z-index: 0;
}

ul li ul li {
  width: 100%;
  border: 1px solid var(--color-almost-very-light-grey);
}

.settings-list-wrapper ul li:hover>ul {
  display: initial;
  z-index: 10000;
}
</style>