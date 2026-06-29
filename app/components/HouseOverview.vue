<script setup lang="ts">
import type { Component } from 'vue'

import EnergyLabelIcon from '~/components/icons/EnergyLabelIcon.vue'
import LivingAreaIcon from '~/components/icons/LivingAreaIcon.vue'
import PlotSizeIcon from '~/components/icons/PlotSizeIcon.vue'
import RoomsIcon from '~/components/icons/RoomsIcon.vue'

type Props = {
  variant?: 'normal' | 'extended'
  livingArea: number | null
  plotArea: number | null
  rooms: number | null
  energyLabel?: string | null
}
type OverviewItem = {
  icon: Component
  value: string | number | undefined | null
  name: string
}

const props = withDefaults(defineProps<Props>(), { variant: 'normal' })

const data: OverviewItem[] = [
  {
    icon: LivingAreaIcon,
    value: props.livingArea == null ? null : `${props.livingArea} m²`,
    name: 'living area',
  },
  {
    icon: PlotSizeIcon,
    value: props.plotArea == null ? null : `${props.plotArea} m²`,
    name: 'plot size',
  },
  {
    icon: RoomsIcon,
    value: props.rooms,
    name: 'rooms',
  },
  {
    icon: EnergyLabelIcon,
    value: props.energyLabel,
    name: 'energy label',
  },
]
</script>

<template>
  <ul class="flex flex-wrap gap-3 gap-y-2 py-1 text-neutral-600">
    <template v-for="houseInfo in data" :key="houseInfo.name">
      <li v-if="houseInfo.value" class="flex items-center gap-1 whitespace-nowrap">
        <component :is="houseInfo.icon" />
        <span class="text-neutral-900">{{ houseInfo.value }}</span>
        <span v-if="variant === 'extended'">{{ houseInfo.name }}</span>
      </li>
    </template>
  </ul>
</template>
