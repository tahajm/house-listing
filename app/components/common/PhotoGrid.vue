<script setup lang="ts">
type Props = {
  headPhoto: { medium: string; large: string };
  extraPhotos?: string[];
  address: string;
  eager?: boolean;
};

withDefaults(defineProps<Props>(), { eager: false });
</script>

<template>
  <div class="@container">
    <div
      class="grid grid-cols-2 gap-1 rounded-lg overflow-hidden @2xl:grid-cols-3 @2xl:grid-rows-2 @5xl:grid-cols-4"
    >
      <div
        class="col-span-2 aspect-5/4 bg-neutral-200 overflow-hidden @2xl:row-span-2"
      >
        <NuxtImg
          :src="headPhoto.medium"
          :srcset="`${headPhoto.medium} 1x, ${headPhoto.large} 2x`"
          :alt="`Hero photo of ${address}`"
          width="720"
          height="576"
          class="size-full object-cover hover-zoom"
          :loading="eager ? 'eager' : 'lazy'"
          :fetchpriority="eager ? 'high' : 'auto'"
        />
      </div>

      <template v-if="extraPhotos?.length">
        <div
          v-for="(photo, i) in extraPhotos"
          :key="photo"
          class="aspect-5/4 bg-neutral-200 overflow-hidden"
          :class="i >= 2 ? 'hidden @5xl:block' : ''"
        >
          <NuxtImg
            :src="photo"
            :alt="`Photo ${i + 1} of ${address}`"
            class="size-full object-cover hover-zoom"
            loading="lazy"
          />
        </div>
      </template>
    </div>
  </div>
</template>
