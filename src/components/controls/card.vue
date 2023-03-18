<script setup>
const props = defineProps(['style', 'media_style', 'content_style'])
</script>

<template>
  <div class="card" :style="props.style">
    <div class="media" :style="props.media_style">
      <slot name="media"></slot>
    </div>
    <div class="content" :style="props.content_style">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<style scoped>
.card {
  background-color: var(--color-background-mute);
  width: 50px;
  height: 50px;
  overflow: hidden;
  border: 1px solid var(--color-background-soft);
}

.media {
  display: flex;
  justify-content: center;
}

.content {
  display: flex;
  justify-content: center;
}
</style>
