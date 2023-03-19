<script setup>
import cardControl from '../components/controls/card.vue'

import { reactive, toRef } from 'vue'

const props = defineProps(['categories']);
const emit = defineEmits(['modalOpened']);

const card_options = reactive({
  width: '90%',
  height: 'fit-content',
  minHeight: '80px',
  display: 'flex',
  margin: '5px',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
  padding: '5px 20px'
})

const content_options = reactive({
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  fontWeight: '500'
})

const categories = toRef(props, 'categories');

const openModal = (id) => {
  emit('modalOpened', id);
}
</script>

<template>
  <div class="date-categories">
    <div class="date-month">{{ categories.month_year }}</div>

    <card-control
      :style="card_options"
      :content_style="content_options"
      v-for="request in categories.requests"
      :key="request.index"
      data-bs-toggle="modal"
      data-bs-target="#request-modal"
      @click="openModal(request.id)"
    >
      <template #content>
        <div class="left-content">
          <div class="request">{{ request.request }}</div>
          <div class="date">{{ request.date }}</div>
          <div class="type" :class="request.type">{{ request.type }}</div>
        </div>
        <div class="right-content">
          <div class="status" :class="request.status">{{ request.status }}</div>
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

.left-content .request {
  font-size: 14px;
  color: var(--color-dark-grey);
  text-transform: capitalize;
}

.left-content .date {
  font-size: 20px;
  font-weight: 700;
}

.left-content .type {
  text-transform: capitalize;
}

.left-content .type.leave {
  color: #f0d572;
}

.left-content .type.sick {
  color: #f07272;
}

.left-content .type.claim {
  color: #9c72f0;
}

.right-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
}

.right-content .status {
  width: 100px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin: 5px 0;
  text-transform: capitalize;
}

.right-content .status.waiting {
  background-color: #ffefc7;
  color: #b9922e;
}

.right-content .status.approved {
  background-color: #c7ffd5;
  color: #2eb951;
}

.right-content .status.declined {
  background-color: #ffd8c7;
  color: #b93c2e;
}
</style>
