<script setup>
import { RouterView, useRoute } from 'vue-router'
import layoutFooter from './components/layouts/footer.vue'

const route = useRoute()
</script>

<template>
  <div class="container">
    <RouterView />

    <layout-footer
      v-if="['home', 'history', 'request', 'account'].includes(route.name)"
    ></layout-footer>
  </div>
</template>

<style scoped>
.container {
  background-color: var(--color-background);
  height: 100%;
  padding: 0;
}
</style>
