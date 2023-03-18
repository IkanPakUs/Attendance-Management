<script setup>
import cardControl from '../components/controls/card.vue'
import announcementIcon from '../components/icons/announcement-icon.vue'
import alertIcon from '../components/icons/alert-icon.vue'
import checkedIcon from '../components/icons/checked-icon.vue'

import { reactive } from 'vue'

const card_options = reactive({
  width: '90%',
  height: 'fit-content',
  minHeight: '80px',
  display: 'flex',
  margin: '10px',
  alignItems: 'center',
  flexDirection: 'row'
})

const content_options = reactive({
  width: '80%',
  height: '100%',
  justifyContent: 'start',
  boxSizing: 'content-box',
  padding: '10px 0'
})

const media_options = reactive({
  width: '20%',
  height: '100%',
  alignItems: 'center'
})

const recent_activity = reactive([
  {
    id: 1,
    type: 'announcement',
    date: '2023-03-13',
    header: 'Pengumuman Cuti Pengerupukan'
  },
  {
    id: 2,
    type: 'alert',
    date: '2023-03-12',
    header: 'Your request time off has been approved'
  },
  {
    id: 3,
    type: 'checked',
    date: '2023-03-12',
    header: "You're clock in at 10:06"
  },
  {
    id: 4,
    type: 'checked',
    date: '2023-03-11',
    header: "You're clock out at 17:44"
  },
  {
    id: 5,
    type: 'checked',
    date: '2023-03-11',
    header: "You're clock in at 09:56"
  }
])
</script>

<template>
  <div class="content">
    <div class="content-wrapper">
      <div class="activity">
        <h4>Recent Activity</h4>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            class="bi bi-three-dots"
            viewBox="0 0 16 16"
          >
            <path
              d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
            />
          </svg>
        </span>
      </div>
      <div class="menu">
        <card-control
          :style="card_options"
          :content_style="content_options"
          :media_style="media_options"
          v-for="activity in recent_activity"
          :key="activity.id"
        >
          <template #media>
            <announcement-icon v-if="activity.type == 'announcement'"></announcement-icon>
            <alert-icon v-if="activity.type == 'alert'"></alert-icon>
            <checked-icon v-if="activity.type == 'checked'"></checked-icon>
          </template>
          <template #content>
            <div class="activity-content">
              <div class="date">{{ activity.date }}</div>
              <div class="header">{{ activity.header }}</div>
            </div>
          </template>
        </card-control>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content {
  width: 100%;
  min-height: calc(100% - 335px);
  background-color: var(--color-background-mute);
  position: relative;
  border-radius: 30px 30px 0 0;
  padding-bottom: 70px;
  position: relative;
  font-family: 'DM Sans';
}

.content-wrapper {
  padding-top: 30px;
}

.activity {
  padding: 0 50px;
  display: flex;
  justify-content: space-between;
}

.content-wrapper .menu {
  padding-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
}

.content-wrapper .activity-content {
  display: flex;
  justify-content: center;
  color: var(--color-text);
  flex-direction: column;
  font-weight: bold;
  padding-right: 10px;
}

.content-wrapper .activity-content .date {
  color: var(--color-dark-grey);
}
</style>
