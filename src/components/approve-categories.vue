<script setup>
import cardControl from '../components/controls/card.vue'

import { reactive, toRef } from 'vue'

const props = defineProps(['categories'])

const card_options = reactive({
  width: '90%',
  height: 'fit-content',
  minHeight: '80px',
  display: 'flex',
  margin: '10px',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexDirection: 'row',
  padding: '5px 20px'
})

const content_options = reactive({
  alignItems: 'center',
  justifyContent: 'end',
  width: '50%',
  fontWeight: '500'
})

const categories = toRef(props, 'categories')
</script>

<template>
  <div class="date-categories">
    <div class="date-month">{{ categories.month_year }}</div>

    <card-control
      :style="card_options"
      :content_style="content_options"
      v-for="request in categories.requests"
      :key="request.index"
    >
      <template #media>
        <div class="avatar">
          <img src="/img/avatar.png" alt="profile" />
        </div>
        <div class="name">
          {{ request.employment }}
          <span>{{ request.employment_type }}</span>
        </div>
      </template>
      <template #content>
        <div class="content">
          <div class="date">{{ request.date }}</div>
          <div class="type" :class="request.type">{{ request.type }}</div>
          <div class="request">{{ request.request }}</div>
        </div>
      </template>
    </card-control>
  </div>
</template>

<style scoped>
.date-categories {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;
}

.date-categories .date-month {
  width: 90%;
  margin: 5px;
  margin-left: 25px;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  justify-content: start;
  color: var(--color-light-grey);
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.name {
  font-weight: 500;
  font-size: 14px;
  display: flex;
  flex-direction: column;
}

.name span {
  color: var(--color-dark-grey);
  font-size: 12px;
  font-weight: normal;
}

.content {
  text-align: end;
}

.content .request {
  font-size: 14px;
  color: var(--color-dark-grey);
  text-transform: capitalize;
}

.content .date {
  font-size: 20px;
  font-weight: 700;
}

.content .type {
  text-transform: capitalize;
}

.content .type.leave {
  color: #f0d572;
}

.content .type.sick {
  color: #f07272;
}

.content .type.claim {
  color: #9c72f0;
}
</style>
