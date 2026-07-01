<script setup lang="ts">
defineProps<{ photos: { medium: string; large: string }[] }>();

const open = defineModel<boolean>({ default: false });

const getClass = (index: number) => {
  const pattern = [
    'lg:col-span-2',
    'lg:col-span-2',
    'lg:col-span-2 col-span-2',
    'lg:col-span-3',
    'lg:col-span-3',
  ];

  const patternIdx = index % pattern.length;

  return pattern[patternIdx];
};
</script>
<template>
  <Teleport to="#teleports">
    <div class="fixed inset-0 z-50 overflow-y-auto bg-white p-4">
      <button
        class="btn-text fixed top-4 right-4 border border-secondary rounded-full bg-white shadow"
        aria-label="Close"
        @click="open = false"
      >
        X
      </button>
      <ul class="grid grid-cols-2 gap-2 lg:grid-cols-6">
        <li
          v-for="(image, index) in photos"
          :key="index"
          class="aspect-3/2"
          :class="getClass(index)"
        >
          <NuxtImg
            :key="index"
            :src="image.medium"
            :srcset="`${image.medium} 1x, ${image.large} 2x`"
            :alt="`Image ${index + 1}`"
            class="w-full aspect-3/2 object-cover rounded"
            loading="lazy"
          />
        </li>
      </ul>
    </div>
  </Teleport>
</template>
