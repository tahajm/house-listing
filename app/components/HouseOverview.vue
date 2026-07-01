<script setup lang="ts">
import type { Component } from 'vue';

import EnergyLabelIcon from '~/components/icons/EnergyLabelIcon.vue';
import LivingAreaIcon from '~/components/icons/LivingAreaIcon.vue';
import PlotSizeIcon from '~/components/icons/PlotSizeIcon.vue';
import RoomsIcon from '~/components/icons/RoomsIcon.vue';

type Props = {
  variant?: 'normal' | 'extended';
  livingArea: number | null;
  plotArea: number | null;
  rooms: number | null;
  energyLabel?: string | null;
};
type OverviewItem = {
  icon: Component;
  value: string | number | undefined | null;
  name: string;
  unit?: { name: string; sign: string };
};

const props = withDefaults(defineProps<Props>(), { variant: 'normal' });

const items = computed<OverviewItem[]>(() => [
  {
    icon: LivingAreaIcon,
    value: props.livingArea,
    name: 'living area',
    unit: { name: 'square meter', sign: 'm²' },
  },
  {
    icon: PlotSizeIcon,
    value: props.plotArea,
    name: 'plot size',
    unit: { name: 'square meter', sign: 'm²' },
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
]);
</script>

<template>
  <ul class="flex flex-wrap gap-3 gap-y-2 py-1 text-neutral-500">
    <template v-for="houseInfo in items" :key="houseInfo.name">
      <li
        v-if="houseInfo.value"
        class="flex items-center gap-1 whitespace-nowrap"
        :aria-label="`${houseInfo.name} ${houseInfo.value} ${houseInfo.unit ? houseInfo.unit.name : ''}`"
      >
        <component :is="houseInfo.icon" />
        <span class="text-neutral-900">
          <span>{{ houseInfo.value }}</span>
          <span v-if="houseInfo.unit" class="ml-1">
            {{ houseInfo.unit?.sign }}
          </span>
        </span>
        <span v-if="variant === 'extended'">{{ houseInfo.name }}</span>
      </li>
    </template>
  </ul>
</template>
