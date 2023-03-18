<script setup>
import layoutHeader from '../components/layouts/header.vue'
import quickMenu from '../components/quick-menu.vue'
import recentActivity from '../components/recent-activity.vue'
</script>

<template>
  <main>
    <layout-header></layout-header>
    <quick-menu></quick-menu>
    <recent-activity></recent-activity>
  </main>
</template>

<style scoped>
main {
  height: 100%;
}
</style>
