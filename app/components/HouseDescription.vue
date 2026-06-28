<script setup lang="ts">
defineProps<{ text: string }>()

const expanded = ref(false)
</script>

<template>
  <section class="mt-6">
    <h2 class="mb-4 text-xl font-semibold lg:text-2xl">Description</h2>
    <div
      class="whitespace-pre-wrap text-neutral-600"
      :class="!expanded && 'max-h-40 overflow-hidden'"
    >
      {{ text }}
    </div>
    <button
      type="button"
      class="mt-2 py-2 text-sm text-secondary-70-darken-1 hover:underline cursor-pointer"
      @click="expanded = !expanded"
    >
      {{ expanded ? 'Show less' : 'Read the full description' }}
    </button>
  </section>
</template>
