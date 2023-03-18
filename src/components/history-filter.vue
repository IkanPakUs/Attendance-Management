<script setup>
import { reactive, ref } from 'vue'

const emit = defineEmits(['switching'])
const props = defineProps(['period'])
const period = ref(props.period)

const switchPeriod = (_period) => {
  period.value = _period
  emit('switching', _period)
}

const date_period = reactive({
  date_from: '13 Mar 2023',
  date_to: '18 Mar 2023'
})

const month_period = reactive({
  month: 'March',
  year: '2023'
})
</script>

<template>
  <div class="filter-option">
    <div class="period-filter">
      <div
        class="period-option"
        @click="switchPeriod('week')"
        :class="{ active: period == 'week' }"
      >
        Week
      </div>
      <div
        class="period-option"
        @click="switchPeriod('month')"
        :class="{ active: period == 'month' }"
      >
        Month
      </div>
    </div>
    <div class="date-filter">
      <div class="chevron-btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-left"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
          />
        </svg>
      </div>
      <div v-if="period == 'week'" class="date-period">
        <div class="date">{{ date_period.date_from }}</div>
        <div class="separator">to</div>
        <div class="date">{{ date_period.date_to }}</div>
      </div>
      <div v-else class="month-period">
        <div class="date">{{ month_period.month }} {{ month_period.year }}</div>
      </div>
      <div class="chevron-btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-right"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<style scoped>
.filter-option {
  margin: 20px;
  box-sizing: border-box;
}

.filter-option .period-filter,
.filter-option .date-filter {
  width: 100%;
  height: 50px;
  background-color: var(--color-background-mute);
  box-shadow: -2px 0px 76px -9px rgba(0, 0, 0, 0.12);
  -webkit-box-shadow: -2px 0px 76px -9px rgba(0, 0, 0, 0.12);
  -moz-box-shadow: -2px 0px 76px -9px rgba(0, 0, 0, 0.12);
  border-radius: 30px;
  margin: 10px 0;
  overflow: hidden;
  display: flex;
}

.filter-option .period-filter .period-option {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  pointer-events: all;
}

.filter-option .period-filter .period-option.active {
  background-color: #8085ee;
  color: var(--color-text-contras);
  border-radius: 30px;
}

.date-filter {
  justify-content: space-between;
  align-items: center;
}

.filter-option .date-filter .date-period,
.filter-option .date-filter .month-period {
  display: flex;
  justify-content: center;
  align-items: center;
}

.filter-option .date-filter .date-period .separator {
  padding: 0 10px;
}

.filter-option .date-filter .date {
  font-size: 14px;
  font-weight: 600;
  text-align: center;
}

.filter-option .date-filter .chevron-btn {
  margin: 0 30px;
}
</style>
