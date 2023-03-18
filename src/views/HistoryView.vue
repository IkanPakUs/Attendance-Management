<script setup>
import historyFilter from '../components/history-filter.vue'
import attendanceLog from '../components/attendance-log.vue'
import monthlyLog from '../components/monthly-log.vue'

import { ref } from 'vue'

const period = ref('week')

const switchPeriod = (_period) => {
  period.value = _period
}
</script>

<template>
  <main>
    <div class="header">
      <div class="header-text">Attendance Log</div>
    </div>

    <history-filter @switching="switchPeriod" :period="period"></history-filter>

    <div class="content">
      <div class="menu">
        <attendance-log v-if="period == 'week'"></attendance-log>
        <monthly-log v-else></monthly-log>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  height: 100%;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 1.5rem;
  background-color: var(--color-background-mute);
  border-radius: 0 0 20px 20px;
  position: sticky;
  top: 0px;
  width: 100%;
}

.header .header-text {
  font-size: 20px;
  font-weight: bold;
}

.content {
  width: 100%;
  min-height: calc(100% - 222px);
  background-color: var(--color-background-mute);
  border-radius: 20px 20px 0 0;
  padding-bottom: 80px;
  box-sizing: border-box;
}

.content .menu {
  padding-top: 30px;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
