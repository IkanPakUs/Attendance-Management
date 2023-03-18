<script setup>
import { toRef } from 'vue'

const props = defineProps(['filter'])
const emit = defineEmits(['switchFilter'])

const filter = toRef(props, 'filter')

const switchFilter = (_filter) => {
  emit('switchFilter', _filter)
}
</script>

<template>
  <div class="filter">
    <div class="filter-option">
      <div
        class="filter-content"
        :class="{ active: filter == 'personal' }"
        @click="switchFilter('personal')"
      >
        Personal Info
      </div>
      <div
        class="filter-content"
        :class="{ active: filter == 'teams' }"
        @click="switchFilter('teams')"
      >
        Teams
      </div>
    </div>
  </div>
</template>

<style scoped>
.filter {
  padding: 10px;
  width: 100%;
  height: 55px;
  margin-top: 30px;
}

.filter .filter-option {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: var(--color-background-soft);
  box-shadow: -2px 0px 76px -9px rgba(0, 0, 0, 0.12);
  -webkit-box-shadow: -2px 0px 76px -9px rgba(0, 0, 0, 0.12);
  -moz-box-shadow: -2px 0px 76px -9px rgba(0, 0, 0, 0.12);
  border-radius: 30px;
  overflow: hidden;
}

.filter .filter-option .filter-content {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  font-weight: 500;
}

.filter .filter-option .filter-content.active {
  background-color: #8085ee;
  color: var(--color-text-contras);
  border-radius: 30px;
}
</style>
