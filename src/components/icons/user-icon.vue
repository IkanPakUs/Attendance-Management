<script setup>
import { useRoute } from 'vue-router'

const props = defineProps(['width', 'height', 'color'])

const route = useRoute()
</script>

<template>
  <svg
    v-if="route.name == 'account'"
    xmlns="http://www.w3.org/2000/svg"
    :width="props.width ?? '16'"
    :height="props.height ?? '16'"
    :fill="props.color ?? 'currentColor'"
    class="bi bi-person-fill"
    viewBox="0 0 16 16"
  >
    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
  </svg>
  <svg
    v-else
    xmlns="http://www.w3.org/2000/svg"
    :width="props.width ?? '16'"
    :height="props.height ?? '16'"
    :fill="props.color ?? 'currentColor'"
    class="bi bi-person"
    viewBox="0 0 16 16"
  >
    <path
      d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"
    />
  </svg>
</template>
