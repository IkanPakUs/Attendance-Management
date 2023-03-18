<script setup>
import requestFilter from '../components/request-filter.vue'
import requestCategories from '../components/request-categories.vue'
import approveCategories from '../components/approve-categories.vue'
import { reactive, ref, watch } from 'vue'

const section = ref('request')
const filter = ref('all')

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
        request: 'Half Day Request',
        date: 'Mon, 19 Mar',
        type: 'leave',
        status: 'waiting'
      }
    ]
  },
  {
    month_year: 'February 2023',
    requests: [
      {
        request: 'Full Day Request',
        date: 'Wed, 17 Feb',
        type: 'sick',
        status: 'approved'
      },
      {
        request: 'Reimbusement',
        date: 'Wed, 17 Feb',
        type: 'trasnport claim',
        status: 'approved'
      },
      {
        request: 'Full Day Request',
        date: 'Fri, 04 Feb',
        type: 'leave',
        status: 'declined'
      }
    ]
  }
])

let approve_categories = reactive([
  {
    month_year: 'March 2023',
    requests: [
      {
        request: 'Half Day Request',
        date: 'Mon, 19 Mar',
        type: 'leave',
        employment: 'Komang Arya',
        employment_type: 'Office',
        status: 'pending'
      }
    ]
  },
  {
    month_year: 'February 2023',
    requests: [
      {
        request: 'Full Day Request',
        date: 'Wed, 17 Feb',
        type: 'sick',
        employment: 'Komang Arya',
        employment_type: 'Office',
        status: 'approved'
      },
      {
        request: 'Reimbusement',
        date: 'Wed, 17 Feb',
        type: 'trasnport claim',
        employment: 'Komang Arya',
        employment_type: 'Office',
        status: 'approved'
      },
      {
        request: 'Full Day Request',
        date: 'Fri, 04 Feb',
        type: 'leave',
        employment: 'Komang Arya',
        employment_type: 'Office',
        status: 'declined'
      }
    ]
  }
])

let filtered_requests = ref(request_categories)
let filtered_approve = ref(approve_categories)

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
    <div class="header">
      <div class="header-text">Request</div>
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
        ></request-categories>
      </div>
      <div class="menu" v-if="section == 'approve'">
        <approve-categories
          :categories="category"
          v-for="category in filtered_approve"
          :key="category.index"
        ></approve-categories>
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
