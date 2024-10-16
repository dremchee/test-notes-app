<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
:root {
  --color-background: #F6F6F6;
  --color-black: #00030F;
  --color-grey: #465163;
  --color-blue: #336CED;
  --color-green: #2FAC2C;
  --color-violet: #904AC7;
  --color-primary: #FF5959;
  --color-light-grey: #DFE2E8;
  --color-white: #FFFFFF;
  --color-very-light-grey: #F6F6F6;
  --color-almost-very-light-grey: #BABEC7;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  background-color: var(--color-background);
  font-family: "Inter", system-ui;
}

#app {
  display: flex;
  min-height: 100%;
}

.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>