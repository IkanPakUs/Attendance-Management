<script setup>
import cardControl from '../components/controls/card.vue'
import { reactive } from 'vue'

const card_options = reactive({
  width: '90%',
  height: 'fit-content',
  minHeight: '80px',
  display: 'flex',
  margin: '5px',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row'
})

const content_options = reactive({
  alignItems: 'center',
  justifyContent: 'space-evenly',
  width: '100%'
})

const calendar_date = reactive([
  [
    {
      date: '26',
      type: 'nt-month',
      is_today: false,
      log: {
        id: 1,
        time_in: '09:58',
        time_out: '17:07',
        date: 'Mon, 26 Feb',
        type: 'Full day'
      }
    },
    {
      date: '27',
      type: 'nt-month',
      is_today: false,
      log: {
        id: 2,
        time_in: '10:05',
        time_out: '17:07',
        date: 'Mon, 27 Feb',
        type: 'Full day'
      }
    },
    {
      date: '28',
      type: 'nt-month',
      is_today: false,
      log: {
        id: 3,
        time_in: '09:58',
        time_out: '17:07',
        date: 'Mon, 28 Feb',
        type: 'Full day'
      }
    },
    {
      date: '01',
      type: 'in-month',
      is_today: false,
      log: {
        id: 4,
        time_in: '09:58',
        time_out: '17:07',
        date: 'Mon, 01 Mar',
        type: 'Full day'
      }
    },
    {
      date: '02',
      type: 'in-month',
      is_today: false,
      log: {
        id: 5,
        time_in: '09:58',
        time_out: '17:07',
        date: 'Mon, 02 Mar',
        type: 'Full day'
      }
    },
    {
      date: '03',
      type: 'in-month',
      is_today: false,
      log: {
        id: 6,
        time_in: '09:58',
        time_out: '17:07',
        date: 'Mon, 03 Mar',
        type: 'Full day'
      }
    },
    {
      date: '04',
      type: 'in-month',
      is_today: false,
      log: {
        id: 7,
        time_in: '09:58',
        time_out: '17:07',
        date: 'Mon, 04 Mar',
        type: 'Full day'
      }
    }
  ],
  [
    {
      date: '05',
      type: 'in-month',
      is_today: false,
      log: {
        id: 8,
        time_in: '09:58',
        time_out: '17:07',
        date: 'Mon, 0 Mar',
        type: 'Full day'
      }
    },
    {
      date: '06',
      type: 'in-month',
      is_today: false,
      log: {
        id: 9,
        time_in: '09:58',
        time_out: '17:07',
        date: 'Mon, 06 Mar',
        type: 'Full day'
      }
    },
    {
      date: '07',
      type: 'in-month',
      is_today: false,
      log: {
        id: 10,
        time_in: '09:58',
        time_out: '17:07',
        date: 'Mon, 07 Mar',
        type: 'Full day'
      }
    },
    {
      date: '08',
      type: 'in-month',
      is_today: false,
      log: {
        id: 11,
        time_in: '09:58',
        time_out: '17:07',
        date: 'Mon, 08 Mar',
        type: 'Full day'
      }
    },
    {
      date: '09',
      type: 'in-month',
      is_today: false,
      log: {
        id: 12,
        time_in: '09:58',
        time_out: '17:07',
        date: 'Mon, 09 Mar',
        type: 'Full day'
      }
    },
    {
      date: '10',
      type: 'in-month',
      is_today: false,
      log: {
        id: 13,
        time_in: '09:58',
        time_out: '17:07',
        date: 'Mon, 10 Mar',
        type: 'Full day'
      }
    },
    {
      date: '11',
      type: 'in-month',
      is_today: false,
      log: {
        id: 14,
        time_in: '09:58',
        time_out: '17:07',
        date: 'Mon, 11 Mar',
        type: 'Full day'
      }
    }
  ],
  [
    {
      date: '12',
      type: 'in-month',
      is_today: false,
      log: {
        id: 15,
        time_in: '09:58',
        time_out: '17:07',
        date: 'Mon, 12 Mar',
        type: 'Full day'
      }
    },
    {
      date: '13',
      type: 'in-month',
      is_today: false,
      log: {
        id: 16,
        time_in: '09:58',
        time_out: '17:07',
        date: 'Mon, 13 Mar',
        type: 'Full day'
      }
    },
    {
      date: '14',
      type: 'in-month',
      is_today: false,
      log: {
        id: 17,
        time_in: '09:58',
        time_out: '17:07',
        date: 'Mon, 14 Mar',
        type: 'Full day'
      }
    },
    {
      date: '15',
      type: 'in-month',
      is_today: false,
      log: {
        id: 18,
        time_in: '09:58',
        time_out: '17:07',
        date: 'Mon, 15 Mar',
        type: 'Full day'
      }
    },
    {
      date: '16',
      type: 'in-month',
      is_today: false,
      log: {
        id: 19,
        time_in: '09:58',
        time_out: '17:07',
        date: 'Mon, 16 Mar',
        type: 'Full day'
      }
    },
    {
      date: '17',
      type: 'in-month',
      is_today: true,
      log: {
        id: 20,
        time_in: '09:58',
        time_out: '17:07',
        date: 'Mon, 17 Mar',
        type: 'Full day'
      }
    },
    {
      date: '18',
      type: 'in-month',
      is_today: false,
      log: {
        id: 21,
        time_in: '09:58',
        time_out: '17:07',
        date: 'Mon, 18 Mar',
        type: 'Full day'
      }
    }
  ],
  [
    {
      date: '19',
      type: 'in-month',
      is_today: false,
      log: {
        id: 22,
        time_in: '09:58',
        time_out: '17:07',
        date: 'Mon, 19 Mar',
        type: 'Full day'
      }
    },
    {
      date: '20',
      type: 'in-month',
      is_today: false,
      log: {
        id: 23,
        time_in: '09:58',
        time_out: '17:07',
        date: 'Mon, 20 Mar',
        type: 'Full day'
      }
    },
    {
      date: '21',
      type: 'in-month',
      is_today: false,
      log: {
        id: 24,
        time_in: '09:58',
        time_out: '17:07',
        date: 'Mon, 21 Mar',
        type: 'Full day'
      }
    },
    {
      date: '22',
      type: 'in-month',
      is_today: false,
      log: {
        id: 25,
        time_in: '09:58',
        time_out: '17:07',
        date: 'Mon, 22 Mar',
        type: 'Full day'
      }
    },
    {
      date: '23',
      type: 'in-month',
      is_today: false,
      log: {
        id: 26,
        time_in: '09:58',
        time_out: '17:07',
        date: 'Mon, 23 Mar',
        type: 'Full day'
      }
    },
    {
      date: '24',
      type: 'in-month',
      is_today: false,
      log: {
        id: 27,
        time_in: '09:58',
        time_out: '17:07',
        date: 'Mon, 24 Mar',
        type: 'Full day'
      }
    },
    {
      date: '25',
      type: 'in-month',
      is_today: false,
      log: {
        id: 28,
        time_in: '09:58',
        time_out: '17:07',
        date: 'Mon, 25 Mar',
        type: 'Full day'
      }
    }
  ],
  [
    {
      date: '26',
      type: 'in-month',
      is_today: false,
      log: {
        id: 29,
        time_in: '09:58',
        time_out: '17:07',
        date: 'Mon, 26 Mar',
        type: 'Full day'
      }
    },
    {
      date: '27',
      type: 'in-month',
      is_today: false,
      log: {
        id: 30,
        time_in: '09:58',
        time_out: '17:07',
        date: 'Mon, 27 Mar',
        type: 'Full day'
      }
    },
    {
      date: '28',
      type: 'in-month',
      is_today: false,
      log: {
        id: 31,
        time_in: '09:58',
        time_out: '17:07',
        date: 'Mon, 28 Mar',
        type: 'Full day'
      }
    },
    {
      date: '29',
      type: 'in-month',
      is_today: false,
      log: {
        id: 32,
        time_in: '09:58',
        time_out: '17:07',
        date: 'Mon, 29 Mar',
        type: 'Full day'
      }
    },
    {
      date: '30',
      type: 'in-month',
      is_today: false,
      log: {
        id: 33,
        time_in: '09:58',
        time_out: '17:07',
        date: 'Mon, 30 Mar',
        type: 'Full day'
      }
    },
    {
      date: '31',
      type: 'in-month',
      is_today: false,
      log: {
        id: 34,
        time_in: '09:58',
        time_out: '17:07',
        date: 'Mon, 31 Mar',
        type: 'Full day'
      }
    },
    {
      date: '01',
      type: 'nt-month',
      is_today: false,
      log: {
        id: 35,
        time_in: '09:58',
        time_out: '17:07',
        date: 'Mon, 01 Apr',
        type: 'Full day'
      }
    }
  ]
])

const log_day = reactive({
  id: 20,
  time_in: '09:58',
  time_out: '17:07',
  date: 'Mon, 17 Mar',
  type: 'full day'
})

const viewLog = (log_id) => {
  const date_active = calendar_date.flat().find((date) => date.log.id == log_day.id)
  date_active.is_today = false

  const log_date = calendar_date.flat().find((date) => date.log.id == log_id)
  log_date.is_today = true

  log_day.id = log_date.log.id
  log_day.time_in = log_date.log.time_in
  log_day.time_out = log_date.log.time_out
  log_day.date = log_date.log.date
  log_day.type = log_date.log.type
}

const report = reactive({
  num_of_work: 27,
  num_of_holiday: 4,
  num_of_leaves: 1
})
</script>

<template>
  <div class="monthly-report">
    <div class="calendar-wrapper">
      <table class="calendar-table">
        <thead class="calendar-head">
          <tr>
            <td>Sun</td>
            <td>Mon</td>
            <td>Tue</td>
            <td>Wed</td>
            <td>Thu</td>
            <td>Fri</td>
            <td>Sat</td>
          </tr>
        </thead>
        <tbody class="calendar-body">
          <tr v-for="week in calendar_date" :key="week.index">
            <td
              :class="[date.type, { active: date.is_today }]"
              v-for="date in week"
              :key="date.index"
              @click="viewLog(date.log.id)"
            >
              {{ date.date }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="log">
      <card-control :style="card_options" :content_style="content_options">
        <template #content>
          <div class="time">{{ log_day.time_in }} <span>In</span></div>
          <div class="date-information">
            <div class="date">{{ log_day.date }}</div>
            <div class="information" :class="log_day.type">{{ log_day.type }}</div>
          </div>
          <div class="time">{{ log_day.time_out }} <span>Out</span></div>
        </template>
      </card-control>
    </div>

    <div class="month-log">
      <div class="report">
        <div class="num">
          <span>{{ report.num_of_work }}</span> Number of working day
        </div>
        <div class="num">
          <span>{{ report.num_of_holiday }}</span> Number of holiday
        </div>
        <div class="num">
          <span>{{ report.num_of_leaves }}</span> Number of leaves taken
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.monthly-report {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.calendar-wrapper {
  width: 90%;
  height: 60%;
  display: flex;
  justify-content: center;
  padding: 30px 10px;
}

.calendar-wrapper .calendar-table {
  width: 100%;
  text-align: center;
  font-weight: 600;
  z-index: 100;
  table-layout: fixed;
}

.calendar-table .calendar-head {
  color: var(--color-light-grey);
}

.calendar-wrapper .calendar-table td {
  width: 50px;
  height: 40px;
  pointer-events: all;
  cursor: pointer;
}

.calendar-wrapper .calendar-table td.active {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  color: var(--color-text-contras);
}

.calendar-wrapper .calendar-table td.active::before {
  content: '';
  position: absolute;
  width: 30px;
  height: 30px;
  background-color: #a2a6f6;
  border-radius: 50%;
  z-index: -1;
}

.calendar-wrapper .calendar-table .nt-month {
  color: var(--color-dark-grey);
}

.log {
  width: 100%;
  display: flex;
  justify-content: center;
}

.time {
  font-size: 18px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50px;
}

.time span {
  font-size: 14px;
  font-weight: normal;
}

.date-information {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-weight: 500;
}

.date-information .date {
  font-size: 14px;
  color: #8085ee;
}

.date-information .information {
  color: var(--color-light-grey);
  text-transform: capitalize;
}

.date-information .information.absent {
  color: rgb(255, 78, 78);
}

.month-log {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
}

.month-log .report {
  width: fit-content;
  color: var(--color-dark-grey);
}

.month-log .report .num span {
  width: 30px;
  display: inline-block;
}
</style>
