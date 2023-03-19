<script setup>
import historyFilter from '../components/history-filter.vue'
import attendanceLog from '../components/attendance-log.vue'
import monthlyLog from '../components/monthly-log.vue'

import { ref } from 'vue'
import dayjs from 'dayjs';

const period = ref('week');
const week_period = ref({
  date_from: dayjs().day(1).format('DD MMM YYYY'),
  date_to: dayjs().day(1).add(5, 'day').format('DD MMM YYYY')
})

const month_period = ref({
  year: dayjs().year(dayjs().year()).format('YYYY') - 0,
  month: dayjs().month(dayjs().month()).format('MM') - 1,
})

const switchPeriod = (_period) => {
  period.value = _period
}

const setWeek = (_week_period) => {
  week_period.value = _week_period;
}

const setMonth = (_month_period) => {
  month_period.value = _month_period;
}

</script>

<template>
  <main>
    <div class="header">
      <div class="header-text">Attendance Log</div>
    </div>

    <history-filter @switching="switchPeriod" :period="period" :week_period="week_period" :month_period="month_period" @setWeek="setWeek" @setMonth="setMonth"></history-filter>

    <div class="content">
      <div class="menu">
        <attendance-log :week_period="week_period" v-if="period == 'week'"></attendance-log>
        <monthly-log :month_period="month_period" v-else></monthly-log>
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
