<script setup>
import dayjs from 'dayjs'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const date = ref(dayjs().format('DD MMM YYYY'))
const time = ref(dayjs().format('HH:mm'))

onMounted(() => {
  setInterval(() => {
    time.value = dayjs().format('HH:mm')
  }, 1000)
})

const toCamera = () => {
  router.push('/camera')
}
</script>

<template>
  <div class="quick-menu">
    <div class="card-wrapper">
      <div class="menu">
        <div class="information">
          <div class="date">{{ date }}</div>
          <div class="time">{{ time }}</div>
        </div>
        <div class="clock-in-btn" @click="toCamera">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-box-arrow-in-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"
            />
            <path
              fill-rule="evenodd"
              d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
            />
          </svg>
          Clock In
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.quick-menu {
  height: 130px;
  border-radius: 30px;
  background-color: var(--color-background-mute);
  position: sticky;
  top: 185px;
  margin: 20px;
  box-shadow: -2px 0px 76px -9px rgba(0, 0, 0, 0.12);
  -webkit-box-shadow: -2px 0px 76px -9px rgba(0, 0, 0, 0.12);
  -moz-box-shadow: -2px 0px 76px -9px rgba(0, 0, 0, 0.12);
}

.card-wrapper {
  height: 100%;
  overflow: auto;
  position: relative;
  top: 0;
  left: 0;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.card-wrapper .menu {
  width: 100%;
  height: 100%;
  padding: 20px 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  position: relative;
  color: var(--color-text);
}

.card-wrapper::-webkit-scrollbar {
  display: none;
}

.card-wrapper .menu .information {
  width: 40%;
  padding: 4px;
  display: flex;
  flex-direction: column;
  align-items: start;
  font-size: 15px;
  font-weight: bold;
  color: #959595;
}

.card-wrapper .menu .information .time {
  font-size: 18px;
  color: var(--color-text);
}

.card-wrapper .menu .clock-in-btn {
  width: 60%;
  height: 60%;
  border-radius: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  background-color: #8085ee;
  color: var(--color-text-contras);
}
</style>
