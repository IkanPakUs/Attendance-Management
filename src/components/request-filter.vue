<script setup>
import { ref, toRef } from 'vue'

const props = defineProps(['section', 'filter'])
const emit = defineEmits(['switchSection', 'switchFilter'])

const section = ref(props.section)
const filter = toRef(props, 'filter')

const switchSection = (_section) => {
  section.value = _section
  emit('switchSection', _section)
}

const switchFilter = (_filter) => {
  emit('switchFilter', _filter)
}
</script>

<template>
  <div class="filter-option">
    <div class="type">
      <div
        class="menu-option"
        :class="{ active: section == 'request' }"
        @click="switchSection('request')"
      >
        My Request
      </div>
      <div
        class="menu-option"
        :class="{ active: section == 'approve' }"
        @click="switchSection('approve')"
      >
        My Approval
      </div>
    </div>

    <div class="content-filter" v-if="section == 'request'">
      <div class="filter-menu" :class="{ active: filter == 'all' }" @click="switchFilter('all')">
        All
      </div>
      <div
        class="filter-menu"
        :class="{ active: filter == 'approved' }"
        @click="switchFilter('approved')"
      >
        Approved
      </div>
      <div
        class="filter-menu"
        :class="{ active: filter == 'waiting' }"
        @click="switchFilter('waiting')"
      >
        Waiting
      </div>
      <div
        class="filter-menu"
        :class="{ active: filter == 'declined' }"
        @click="switchFilter('declined')"
      >
        Declined
      </div>
    </div>

    <div class="content-filter" v-if="section == 'approve'">
      <div
        class="filter-menu"
        :class="{ active: filter == 'pending' }"
        @click="switchFilter('pending')"
      >
        Pending
      </div>
      <div
        class="filter-menu"
        :class="{ active: filter == 'approved' }"
        @click="switchFilter('approved')"
      >
        Approved
      </div>
      <div
        class="filter-menu"
        :class="{ active: filter == 'declined' }"
        @click="switchFilter('declined')"
      >
        Declined
      </div>
    </div>
  </div>
</template>

<style scoped>
.filter-option {
  margin: 20px;
  box-sizing: border-box;
}

.filter-option .type,
.filter-option .content-filter {
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

.filter-option .type .menu-option {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  pointer-events: all;
}

.filter-option .type .menu-option.active {
  background-color: #8085ee;
  color: var(--color-text-contras);
  border-radius: 30px;
}

.filter-option .content-filter {
  background-color: var(--color-background-soft);
  color: var(--color-light-grey);
}

.filter-option .content-filter .filter-menu.active {
  background-color: var(--color-background-mute);
  color: var(--color-text);
  border-radius: 30px;
}

.filter-option .content-filter .filter-menu {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
}
</style>
