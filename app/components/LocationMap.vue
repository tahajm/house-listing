<script setup lang="ts">
type Props = { lat: number; lng: number; address: string }
const props = defineProps<Props>()

const src = computed(() => generatGoogleMapUrl(props.lat, props.lng))
</script>

<template>
  <section class="mt-6">
    <h2 class="mb-4 text-xl font-semibold lg:text-2xl">Location</h2>
    <iframe
      :src="src"
      :title="`Map of ${address}`"
      class="w-full h-72 lg:h-96 rounded-lg border-0"
      loading="lazy"
    />
  </section>
</template>
