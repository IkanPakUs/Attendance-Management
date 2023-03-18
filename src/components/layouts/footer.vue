<script setup>
import homeIcon from '../icons/home-icon.vue'
import historyIcon from '../icons/history-icon.vue'
import requestIcon from '../icons/request-icon.vue'
import userIcon from '../icons/user-icon.vue'

import { reactive } from 'vue'
import { RouterLink } from 'vue-router'

const option = reactive({
  width: 22,
  height: 22
})
</script>

<template>
  <footer>
    <div class="menu">
      <router-link to="/">
        <home-icon :width="option.width" :height="option.height"></home-icon>
      </router-link>
      <router-link to="/history">
        <history-icon :width="option.width" :height="option.height"></history-icon>
      </router-link>
      <router-link to="/request">
        <request-icon :width="option.width" :height="option.height"></request-icon>
      </router-link>
      <router-link to="/account">
        <user-icon :width="option.width" :height="option.height"></user-icon>
      </router-link>
    </div>
  </footer>
</template>

<style scoped>
footer {
  width: 100%;
  height: 70px;
  background-color: var(--color-background-light);
  border-radius: 20px 20px 0 0;
  position: fixed;
  bottom: 0;
}

.menu {
  display: flex;
  padding: 10px;
  box-sizing: border-box;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
}

.menu a {
  color: var(--color-light-grey);
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media screen and (min-width: 576px) {
  footer {
    max-width: 576px;
  }
}
</style>
