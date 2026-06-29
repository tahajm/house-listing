<script setup lang="ts">
defineProps<{ currentPage: number; totalPage: number }>()
const emit = defineEmits<{
  (e: 'next'): void
  (e: 'prev'): void
}>()
</script>
<template>
  <nav class="flex justify-between py-8">
    <button class="customButton" :disabled="currentPage <= 1" @click="emit('prev')">
      Previous
    </button>

    <button class="customButton" :disabled="currentPage >= totalPage" @click="emit('next')">
      Next
    </button>
  </nav>
</template>

<style scoped>
@reference "tailwindcss";
.customButton {
  @apply px-4 py-2 rounded-sm cursor-pointer
         text-sky-700 hover:text-sky-800 hover:bg-sky-50
         disabled:bg-gray-300 disabled:cursor-not-allowed disabled:text-gray-400 disabled:hover:bg-gray-300;
}
</style>
