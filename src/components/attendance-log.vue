<script setup>
import cardControl from '../components/controls/card.vue'
import { reactive } from 'vue'

const props = defineProps(['week_period']);

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

const attandance_log = reactive([
  {
    id: 1,
    time_in: '09:58',
    time_out: '17:07',
    date: 'Mon, 13 Mar',
    type: 'full day'
  },
  {
    id: 2,
    time_in: '12:00',
    time_out: '17:00',
    date: 'Mon, 14 Mar',
    type: 'half day'
  },
  {
    id: 3,
    time_in: '10:20',
    time_out: '17:10',
    date: 'Mon, 15 Mar',
    type: 'full day'
  },
  {
    id: 4,
    time_in: null,
    time_out: null,
    date: 'Mon, 16 Mar',
    type: 'absent'
  },
  {
    id: 5,
    time_in: '10:00',
    time_out: '18:20',
    date: 'Mon, 17 Mar',
    type: 'full day'
  },
  {
    id: 6,
    time_in: '09:54',
    time_out: '17:01',
    date: 'Mon, 18 Mar',
    type: 'full day'
  }
])
</script>

<template>
  <card-control
    :style="card_options"
    :content_style="content_options"
    v-for="log in attandance_log"
    :key="log.id"
  >
    <template #content>
      <div class="time">{{ log.time_in ?? '-' }} <span>In</span></div>
      <div class="date-information">
        <div class="date">{{ log.date }}</div>
        <div class="information" :class="log.type">{{ log.type }}</div>
      </div>
      <div class="time">{{ log.time_out ?? '-' }} <span>Out</span></div>
    </template>
  </card-control>
</template>

<style scoped>
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
</style>
