<script setup lang="ts">
defineProps<{ currentPage: number; totalPages: number }>()
const emit = defineEmits<{
  (e: 'next'): void
  (e: 'prev'): void
}>()
</script>
<template>
  <nav class="flex justify-between py-8">
    <button class="btn-text" :disabled="currentPage <= 1" @click="emit('prev')">Previous</button>

    <button class="btn-text" :disabled="currentPage >= totalPages" @click="emit('next')">
      Next
    </button>
  </nav>
</template>
