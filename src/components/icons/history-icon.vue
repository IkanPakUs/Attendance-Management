<script setup>
import { useRoute } from 'vue-router'

const props = defineProps(['width', 'height', 'color'])

const route = useRoute()
</script>

<template>
  <svg
    v-if="route.name == 'history'"
    xmlns="http://www.w3.org/2000/svg"
    :width="props.width ?? '16'"
    :height="props.height ?? '16'"
    :fill="props.color ?? 'currentColor'"
    class="bi bi-calendar2-range-fill"
    viewBox="0 0 16 16"
  >
    <path
      d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zm9.954 3H2.545c-.3 0-.545.224-.545.5v1c0 .276.244.5.545.5h10.91c.3 0 .545-.224.545-.5v-1c0-.276-.244-.5-.546-.5zM10 7a1 1 0 0 0 0 2h5V7h-5zm-4 4a1 1 0 0 0-1-1H1v2h4a1 1 0 0 0 1-1z"
    />
  </svg>
  <svg
    v-else
    xmlns="http://www.w3.org/2000/svg"
    :width="props.width ?? '16'"
    :height="props.height ?? '16'"
    :fill="props.color ?? 'currentColor'"
    class="bi bi-calendar2-range"
    viewBox="0 0 16 16"
  >
    <path
      d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"
    />
    <path
      d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4zM9 8a1 1 0 0 1 1-1h5v2h-5a1 1 0 0 1-1-1zm-8 2h4a1 1 0 1 1 0 2H1v-2z"
    />
  </svg>
</template>
