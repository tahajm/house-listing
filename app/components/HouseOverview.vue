<script setup lang="ts">
type Props = {
  variant?: 'normal' | 'extended'
  woonoppervlakte: number
  aantalkamers: number
  perceeloppervlakte: number
  energielabel?: string
}
withDefaults(defineProps<Props>(), { variant: 'normal' })
</script>

<template>
  <ul class="overview">
    <li class="overview__item">
      <IconPlotSize /> <span class="overview__value">{{ woonoppervlakte }} m²</span>
      <span v-if="variant === 'extended'">living area</span>
    </li>
    <li class="overview__item">
      <IconLivingArea /> <span class="overview__value">{{ perceeloppervlakte }} m²</span>
      <span v-if="variant === 'extended'">plot size</span>
    </li>
    <li class="overview__item">
      <IconRooms /> <span class="overview__value">{{ aantalkamers }}</span>
      <span v-if="variant === 'extended'">bedrooms</span>
    </li>
    <li v-if="energielabel" class="overview__item">
      <IconEnergyLabel /> <span class="overview__value">{{ energielabel }}</span>
      <span v-if="variant === 'extended'">energy label</span>
    </li>
  </ul>
</template>

<style scoped>
@reference "tailwindcss";

.overview {
  @apply flex flex-wrap gap-3 gap-y-2 py-1 text-neutral-600;
}

.overview__item {
  @apply flex items-center gap-1;
}

.overview__value {
  @apply text-neutral-900;
}
</style>
