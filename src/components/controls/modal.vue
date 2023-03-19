<script setup>
import { onMounted, ref } from 'vue'

const props = defineProps(['id', 'ref_modal'])
const emits = defineEmits(['modalClosed'])

const my_modal = ref(null)

onMounted(() => {
  my_modal.value?.addEventListener('hidden.bs.modal', (event) => {
    emits('modalClosed')
  })
})
</script>

<template>
  <div
    class="modal fade"
    :id="props.id"
    tabindex="-1"
    :aria-labelledby="`${props.id}-label`"
    aria-hidden="true"
    ref="my_modal"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <slot name="header"></slot>
        </div>
        <div class="modal-body">
          <slot name="body"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal .modal-dialog {
  top: 80px;
  margin: 0 20px;
}

.modal .modal-header {
  display: flex;
}
</style>
