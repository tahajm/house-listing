<script setup lang="ts">
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/vue';

defineProps<{ photos: { medium: string; large: string }[] }>();

const open = defineModel<boolean>({ default: false });
</script>

<template>
  <Dialog :open="open" class="relative z-50" @close="open = false">
    <div class="fixed inset-0 overflow-y-auto">
      <DialogPanel class="min-h-full bg-white p-4">
        <DialogTitle class="sr-only">Photo gallery</DialogTitle>
        <button
          class="btn-text fixed top-4 right-4 border rounded-full bg-white"
          aria-label="Close gallery"
          @click="open = false"
        >
          X
        </button>
        <ul class="grid grid-cols-2 gap-2 lg:grid-cols-3">
          <li v-for="(image, index) in photos" :key="image.medium">
            <NuxtImg
              :src="image.medium"
              :srcset="`${image.medium} 1x, ${image.large} 2x`"
              :alt="`Photo ${index + 1}`"
              class="w-full aspect-3/2 object-cover rounded"
              loading="lazy"
            />
          </li>
        </ul>
      </DialogPanel>
    </div>
  </Dialog>
</template>
