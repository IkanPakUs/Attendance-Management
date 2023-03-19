<script setup>
import requestFilter from '../components/request-filter.vue'
import requestCategories from '../components/request-categories.vue'
import approveCategories from '../components/approve-categories.vue'
import modalControl from '../components/controls/modal.vue'

import { onBeforeRouteLeave } from 'vue-router'
import { reactive, ref, watch } from 'vue'
import dayjs from 'dayjs'

const section = ref('request');
const filter = ref('all');
const is_modal_open = ref(false);
const close_button = ref(null);

const modal_content = reactive({
  id: '',
  request: '',
  date: '',
  type: '',
  status: '',
});

const switchSection = (_section) => {
  section.value = _section

  if (_section == 'approve') {
    filter.value = 'pending'
  }

  if (_section == 'request') {
    filter.value = 'all'
  }
}

const switchFilter = (_filter) => {
  filter.value = _filter
}

let request_categories = reactive([
  {
    month_year: 'March 2023',
    requests: [
      {
        id: 1,
        request: 'Half Day Request',
        date: 'Mon, 19 Mar',
        type: 'leave',
        status: 'waiting',
        start_time_off: '21 Mar 2023',
        taken: '1 day',
        reason: 'Pengerupukan'
      }
    ]
  },
  {
    month_year: 'February 2023',
    requests: [
      {
        id: 2,
        request: 'Full Day Request',
        date: 'Wed, 17 Feb',
        type: 'sick',
        status: 'approved',
        start_time_off: '22 Mar 2023',
        taken: '1 day',
        reason: 'Pengerupukan'
      },
      {
        id: 3,
        request: 'reimbusement',
        date: 'Wed, 17 Feb',
        type: 'trasnport claim',
        status: 'approved',
        value: '20.000',
        slip: '-',
        description: 'Meeting ke jimmbaran'
      },
      {
        id: 4,
        request: 'Full Day Request',
        date: 'Fri, 04 Feb',
        type: 'leave',
        status: 'declined',
        start_time_off: '21 Mar 2023',
        taken: '1 day',
        reason: 'Pengerupukan'
      }
    ]
  }
])

let approve_categories = reactive([
  {
    month_year: 'March 2023',
    requests: [
      {
        id: 1,
        request: 'Half Day Request',
        date: 'Mon, 19 Mar',
        type: 'leave',
        employment: 'Komang Arya',
        employment_type: 'Office',
        status: 'pending',
        start_time_off: '21 Mar 2023',
        taken: '1 day',
        reason: 'Pengerupukan'
      }
    ]
  },
  {
    month_year: 'February 2023',
    requests: [
      {
        id: 2,
        request: 'Full Day Request',
        date: 'Wed, 17 Feb',
        type: 'sick',
        employment: 'Komang Arya',
        employment_type: 'Office',
        status: 'approved',
        start_time_off: '21 Mar 2023',
        taken: '1 day',
        reason: 'Pengerupukan'
      },
      {
        id: 3,
        request: 'Reimbusement',
        date: 'Wed, 17 Feb',
        type: 'trasnport claim',
        employment: 'Komang Arya',
        employment_type: 'Office',
        status: 'approved',
        start_time_off: '21 Mar 2023',
        taken: '1 day',
        reason: 'Pengerupukan'
      },
      {
        id: 4,
        request: 'Full Day Request',
        date: 'Fri, 04 Feb',
        type: 'leave',
        employment: 'Komang Arya',
        employment_type: 'Office',
        status: 'declined',
        start_time_off: '21 Mar 2023',
        taken: '1 day',
        reason: 'Pengerupukan'
      }
    ]
  }
])

let filtered_requests = ref(request_categories)
let filtered_approve = ref(approve_categories)

const form_request = reactive({
  request_type: 1,
  type: 1,
  time_off_date: dayjs().format('YYYY-MM-DD'),
  duration: 1,
  value: 0,
  reason: '',
});

const dateFormat = (date) => {
  return dayjs(date).format('YYYY-MM-DD');
}

const modalClosed = () => {
  is_modal_open.value = false;
}

const modalOpened = (id) => {
  let request = {};

  if (section.value == 'request') {
    request = request_categories.flatMap((categories) => categories.requests).find((request) => request.id == id);  
  }
  
  if (section.value == 'approve') {
    request = approve_categories.flatMap((categories) => categories.requests).find((request) => request.id == id);  

    modal_content.status = request.status;
    modal_content.employment = request.employment;
  }

  modal_content.id = request.id;
  modal_content.request = request.request;
  modal_content.date = request.date;
  modal_content.type = request.type;
  modal_content.status = request.status;

  if (request.request == "reimbusement") {
    modal_content.value = request.value;
    modal_content.slip = request.slip;
    modal_content.description = request.description
  } else {
    modal_content.start_time_off = request.start_time_off;
    modal_content.taken = request.taken;
    modal_content.reason = request.reason;
  }

  is_modal_open.value = true;
}

onBeforeRouteLeave(() => {
  if (is_modal_open.value) {
    close_button.value.click();

    return false
  }
})

watch(
  () => filter.value,
  () => {
    if (section.value == 'request') {
      const _filtered_requests = request_categories
        .map((_category) => {
          const category = { ..._category }
          const requests = [...category.requests].filter((request) => {
            return filter.value == 'all' ? true : request.status == filter.value
          })

          category.requests = requests

          return category
        })
        .filter((category) => {
          return category.requests.length
        })

      filtered_requests.value = _filtered_requests
    }

    if (section.value == 'approve') {
      const _filtered_approve = approve_categories
        .map((_category) => {
          const category = { ..._category }
          const approve = [...category.requests].filter((approve) => {
            return approve.status == filter.value
          })

          category.requests = approve

          return category
        })
        .filter((category) => {
          return category.requests.length
        })

      filtered_approve.value = _filtered_approve
    }
  }
)
</script>

<template>
  <main>
    <div id="header">
      <div class="header-text">Request</div>
      <div class="add-btn">
        <button data-bs-toggle="modal" data-bs-target="#form-modal" @click="is_modal_open = true">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#8085ee" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
          </svg>
        </button>
      </div>
    </div>

    <request-filter
      :section="section"
      :filter="filter"
      @switchSection="switchSection"
      @switchFilter="switchFilter"
    ></request-filter>

    <div class="content">
      <div class="menu" v-if="section == 'request'">
        <request-categories
          :categories="category"
          v-for="category in filtered_requests"
          :key="category.index"
          @modalOpened="modalOpened"
        ></request-categories>
      </div>
      <div class="menu" v-if="section == 'approve'">
        <approve-categories
          :categories="category"
          v-for="category in filtered_approve"
          :key="category.index"
          @modalOpened="modalOpened"
        ></approve-categories>
      </div>
    </div>

    <modal-control :id="'request-modal'" @modalClosed="modalClosed">
      <template #header>
        <div class="header">
          <div class="date">{{ modal_content.date }}</div>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            ref="close_button"
          ></button>
        </div>
      </template>

      <template #body>
        <div class="request-status">
          <div class="status" :class="[modal_content.status]">{{ modal_content.status }}</div>
        </div>
        <div class="content-body">
          <div class="option" v-if="section == 'approve'">
            <div class="title">Employment</div>
            <div class="value">{{ modal_content.employment }}</div>
          </div>
          <div class="option" v-if="modal_content.request != 'reimbusement'">
            <div class="title">Time off date</div>
            <div class="value">{{ modal_content.start_time_off }}</div>
          </div>
          <div class="option">
            <div class="title">Type</div>
            <div class="value">{{ modal_content.request }}</div>
          </div>
          <div class="option">
            <div class="title">Request type</div>
            <div class="value">{{ modal_content.type }}</div>
          </div>
          <div class="option" v-if="modal_content.request != 'reimbusement'">
            <div class="title">Taken</div>
            <div class="value">1 day</div>
          </div>
          <div class="option" v-if="modal_content.request != 'reimbusement'">
            <div class="title">Reason</div>
            <div class="value">Pengerupukan</div>
          </div>
          <div class="option" v-if="modal_content.request == 'reimbusement'">
            <div class="title">Description</div>
            <div class="value">{{ modal_content.description }}</div>
          </div>

          <!-- <div class="eviden" v-if="modal_content.request == 'reimbusement'">
            <img src="/img/avatar.png" alt="profile" />
          </div> -->

          <div class="decision-btn" v-if="section == 'approve' && modal_content.status == 'pending'">
            <button class="approve">Approve</button>
            <button class="decline">Decline</button>
          </div>
        </div>
      </template>
    </modal-control>

    <modal-control :id="'form-modal'" @modalClosed="modalClosed">
      <template #header>
        <div class="title">Request</div>
        <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            ref="close_button"
          ></button>
      </template>

      <template #body>
        <div class="form-group">
          <label class="form-label">Request type</label>
          <select class="form-control" id="request-type" v-model="form_request.request_type">
            <option value="1">Full day request</option>
            <option value="2">Half day request</option>
            <option value="3">Reimbusement</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Type</label>
          <select class="form-control" id="type" v-model="form_request.type">
            <option value="1" v-if="form_request.request_type != 3">Leave</option>
            <option value="2" v-if="form_request.request_type != 3">Sick</option>
            <option value="3" v-if="form_request.request_type == 3">Transport Claim</option>
            <option value="3" v-if="form_request.request_type == 3">Entertain Claim</option>
            <option value="3" v-if="form_request.request_type == 3">Medical Claim</option>
          </select>
        </div>
        <div class="form-group" v-if="form_request.request_type != 3">
          <label class="form-label">Time off date</label>
          <VueDatePicker v-model="form_request.time_off_date" :format="dateFormat" text-input></VueDatePicker>
        </div>
        <div class="form-group" v-if="form_request.request_type != 3">
          <label class="form-label">Duration</label>
          <input type="number" id="number" class="form-control" v-model="form_request.duration">
        </div>
        <div class="form-group" v-if="form_request.request_type == 3">
          <label class="form-label">Value</label>
          <input type="number" id="number" class="form-control" v-model="form_request.value">
        </div>
        <div class="form-group">
          <label class="form-label">{{ form_request.request_type == 3 ? 'Description' : 'Reason' }}</label>
          <textarea id="reason" rows="4" class="form-control" v-model="form_request.reason"></textarea>
        </div>
        
        <div class="request-btn">
          <button>Request</button>
        </div>
      </template>
    </modal-control>
  </main>
</template>

<style scoped>
main {
  height: 100%;
}

#header {
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

#header .header-text {
  font-size: 20px;
  font-weight: bold;
}

#header .add-btn button {
  border: none;
  background-color: transparent;
  width: 24px;
  height: 24px;
  border-radius: 50%;
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

#request-modal .header {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

#request-modal .header .date {
  width: 70%;
  font-size: 20px;
  font-weight: 700;
}

#request-modal .request-status {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#request-modal .request-status .status {
  width: 100px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin: 5px 0;
  text-transform: capitalize;
}

#request-modal .request-status .status.waiting,
#request-modal .request-status .status.pending,
#form-modal .request-btn button {
  background-color: #ffefc7;
  color: #b9922e;
}

#request-modal .request-status .status.approved,
#request-modal .decision-btn button.approve {
  background-color: #c7ffd5;
  color: #2eb951;
}

#request-modal .request-status .status.declined,
#request-modal .decision-btn button.decline {
  background-color: #ffd8c7;
  color: #b93c2e;
}

#request-modal .content-body {
  padding: 10px 20px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#request-modal .content-body .option {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

#request-modal .content-body .option .title,
#request-modal .content-body .option .value {
  width: 50%;
  text-align: start;
  padding: 5px;
}

#request-modal .content-body .option .title {
  color: var(--color-light-grey);
  font-size: 14px;
  font-weight: 500;
}

#request-modal .content-body .option .value {
  color: var(--color-text);
  font-size: 16px;
  font-weight: 500;
}

#request-modal .content-body .eviden {
  width: 70%;
  max-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  border-radius: 20px;
  overflow: hidden;
}

#request-modal .content-body .eviden img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

#request-modal .decision-btn,
#form-modal .request-btn {
  width: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: center;
}

#request-modal .decision-btn button,
#form-modal .request-btn button {  
  border: none;
  border-radius: 8px;
  padding: 5px 10px;
  box-sizing: border-box;
  margin: 0 10px;
}

#form-modal .title {
  font-size: 16px;
  font-weight: 500;
}

#form-modal .form-group {
  margin: 5px 0;
}

#form-modal .form-group input:focus,
#form-modal .form-group select:focus,
#form-modal .form-group textarea:focus {
  outline: none;
  box-shadow: none;
  border-color: #aaaeb7;
}
</style>
