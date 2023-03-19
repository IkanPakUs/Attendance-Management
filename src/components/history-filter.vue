<script setup>
import { ref, toRef } from 'vue'
import dayjs from 'dayjs';
import objectSupport from 'dayjs/plugin/objectSupport'

dayjs.extend(objectSupport);

const emit = defineEmits(['switching', 'setWeek', 'setMonth'])
const props = defineProps(['period', 'week_period', 'month_period'])
const period = ref(props.period)

const switchPeriod = (_period) => {
  period.value = _period
  emit('switching', _period)
}

const week_period = toRef(props, 'week_period')
const month_period = toRef(props, 'month_period')

const getMonthFormat = (date) => {
  const year = dayjs(date).year(dayjs(date).year()).format('YYYY');
  const month = dayjs(date).month(dayjs(date).month()).format('MMMM');

  return `${month} ${year}`
}

const addDate = () => {
  if (period.value == 'week') {
    const now_period = {...week_period.value};

    const next_week = dayjs(now_period.date_from).day(1).add(7, 'day');

    emit('setWeek', {
      date_from: next_week.clone().format('DD MMM YYYY'),
      date_to: next_week.clone().add(5, 'day').format('DD MMM YYYY')
    });
  }

  if (period.value == 'month') {
    const now_month = {...month_period.value};

    const next_month = dayjs({day: 0, month: now_month.month, year: now_month.year}).clone().add(1, 'month');

    emit('setMonth', {
      year: next_month.clone().year(next_month.year()).format('YYYY') - 0,
      month: next_month.clone().month(next_month.month()).format('MM') - 1,
    });
  }
}

const subDate = () => {
  if (period.value == 'week') {
    const now_period = {...week_period.value};

    const prev_week = dayjs(now_period.date_from).day(1).subtract(7, 'day');

    emit('setWeek', {
      date_from: prev_week.clone().format('DD MMM YYYY'),
      date_to: prev_week.clone().add(5, 'day').format('DD MMM YYYY')
    });
  }

  if (period.value == 'month') {
    const now_month = {...month_period.value};

    const next_month = dayjs({day: 0, month: now_month.month, year: now_month.year}).clone().subtract(1, 'month');

    emit('setMonth', {
      year: next_month.clone().year(next_month.year()).format('YYYY') - 0,
      month: next_month.clone().month(next_month.month()).format('MM') - 1,
    });
  }
}

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
      <div class="chevron-btn" @click="subDate">
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
      <div v-if="period == 'week'" class="week-period">
        <div class="date">{{ week_period.date_from }}</div>
        <div class="separator">to</div>
        <div class="date">{{ week_period.date_to }}</div>
      </div>
      <div v-else class="month-period">
        <VueDatePicker v-model="month_period" month-picker :format="getMonthFormat"></VueDatePicker>
      </div>
      <div class="chevron-btn" @click="addDate">
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

.filter-option .date-filter .week-period,
.filter-option .date-filter .month-period {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
}

:deep() .dp__icon {
  display: none;
}

:deep() .dp__pointer.dp__input {
  padding: 0;
  text-align: center;
  font-weight: 500;
  font-size: 15px;
  border: none;
}

.filter-option .date-filter .week-period .separator {
  padding: 0 10px;
  font-weight: 500;
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
