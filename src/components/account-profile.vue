<script setup>
import { toRef } from 'vue'

const props = defineProps(['profile'])

const profile = toRef(props, 'profile')
</script>

<template>
  <div class="profile">
    <div class="avatar-wrapper">
      <div class="avatar">
        <img src="/img/avatar.png" alt="profile" />
      </div>
    </div>
    <div class="name">
      {{ profile.full_name }}
      <span>{{ profile.employment.position }}</span>
    </div>
  </div>
</template>

<style scoped>
.profile {
  display: flex;
}

.profile .avatar-wrapper {
  width: 30%;
}

.profile .avatar {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.profile .avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.profile .name {
  display: flex;
  flex-direction: column;
  width: auto;
  font-weight: 500;
  font-size: 18px;
  width: 70%;
}

.profile .name span {
  font-size: 16px;
  color: var(--color-light-grey);
}
</style>
