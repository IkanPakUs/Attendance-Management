<script setup>
import accountFilter from '../components/account-filter.vue'
import accountProfile from '../components/account-profile.vue'
import personalInfo from '../components/personal-info.vue'
import teams from '../components/teams.vue'

import { reactive, ref } from 'vue'

const profile = reactive({
  full_name: 'Komang Gede Ksatria Arya Wirawan',
  user_name: 'Komang Arya',
  email: 'komang@aman.com',
  phone: '+62 8965 6720 690',
  city: 'Denpasar',
  province: 'Bali',
  employment: {
    code: 'AMS002',
    position: 'Web Developer',
    company: {
      name: 'PT. Aman Sejahtera'
    },
    division: 'Development',
    job_level: 'staf',
    join_date: '01 Jun 2021',
    teams: [
      {
        name: 'Sarvajanaprya',
        position: 'Junior Web Developer'
      },
      {
        name: 'Keanu Prilantara',
        position: 'Junior Web Developer'
      },
      {
        name: 'Dwi Asmara',
        position: 'Senior Web Developer'
      },
      {
        name: 'Gananta',
        position: 'Data engineer'
      },
      {
        name: 'Ihsan',
        position: 'DevOps'
      },
      {
        name: 'Nova',
        position: 'Junior Web Developer'
      }
    ]
  }
})

const filter = ref('personal')

const switchFilter = (_filter) => {
  filter.value = _filter
}
</script>

<template>
  <main>
    <div class="header">
      <div class="header-text">Account</div>
    </div>

    <div class="content">
      <account-profile :profile="profile"></account-profile>
      <account-filter :filter="filter" @switchFilter="switchFilter"></account-filter>

      <div class="info">
        <personal-info :profile="profile" v-if="filter == 'personal'"></personal-info>
        <teams :teams="profile.employment.teams" v-if="filter == 'teams'"></teams>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  height: 100%;
  background-color: var(--color-background-mute);
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 1.5rem;
  border-radius: 0 0 20px 20px;
  position: sticky;
  top: 0px;
  width: 100%;
  background-color: var(--color-background-mute);
}

.header .header-text {
  font-size: 20px;
  font-weight: bold;
}

.content {
  padding: 30px;
  box-sizing: border-box;
  padding-bottom: 70px;
}

.info {
  margin-top: 30px;
}
</style>
