<script setup lang="ts">
import EnergyLabelIcon from '~/components/icons/EnergyLabelIcon.vue'
import LivingAreaIcon from '~/components/icons/LivingAreaIcon.vue'
import PlotSizeIcon from '~/components/icons/PlotSizeIcon.vue'
import RoomsIcon from '~/components/icons/RoomsIcon.vue'

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
      <PlotSizeIcon /> <span class="overview__value">{{ woonoppervlakte }} m²</span>
      <span v-if="variant === 'extended'">living area</span>
    </li>
    <li class="overview__item">
      <LivingAreaIcon /> <span class="overview__value">{{ perceeloppervlakte }} m²</span>
      <span v-if="variant === 'extended'">plot size</span>
    </li>
    <li class="overview__item">
      <RoomsIcon /> <span class="overview__value">{{ aantalkamers }}</span>
      <span v-if="variant === 'extended'">bedrooms</span>
    </li>
    <li v-if="energielabel" class="overview__item">
      <EnergyLabelIcon /> <span class="overview__value">{{ energielabel }}</span>
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
