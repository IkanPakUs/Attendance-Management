<script setup>
import { reactive, ref } from 'vue'
import cardControl from '../components/controls/card.vue'

const props = defineProps(['teams'])

const card_options = reactive({
  width: '100%',
  height: '80px',
  flexDirection: 'row',
  justifyContent: 'center',
  margin: '10px 0'
  // border: 'none'
})

const media_options = reactive({
  width: '30%',
  height: '100%',
  alignItems: 'center'
})

const content_options = reactive({
  width: '70%',
  height: '100%',
  alignItems: 'center',
  justifyContent: 'start'
})

const teams = ref(props.teams)
</script>

<template>
  <div class="teams">
    <card-control
      :style="card_options"
      :media_style="media_options"
      :content_style="content_options"
      v-for="member in teams"
      :key="member.index"
    >
      <template #media>
        <div class="avatar">
          <img src="/img/avatar.png" alt="profile" />
        </div>
      </template>
      <template #content>
        <div class="info">
          <div class="name">{{ member.name }}</div>
          <div class="position">{{ member.position }}</div>
        </div>
      </template>
    </card-control>
  </div>
</template>

<style scoped>
.avatar {
  width: 50px;
  height: 50px;
  overflow: hidden;
  border-radius: 50%;
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.info {
  font-weight: 500;
}

.info .name {
  font-size: 18px;
}

.info .position {
  font-size: 14px;
  color: var(--color-light-grey);
}
</style>
