<script setup lang="ts">
import type { Thumbnail } from '~~/shared/types/shared';

type Props = {
  heroImage: Required<Thumbnail>;
  address: string;
  images?: string[];
  eager?: boolean;
};

withDefaults(defineProps<Props>(), { eager: false });
</script>

<template>
  <div class="@container">
    <section class="thumbnail">
      <div class="thumbnail__hero">
        <NuxtImg
          :src="heroImage.large"
          :srcset="`${heroImage.medium} 600w, ${heroImage.large} 1080w, ${heroImage.largest} 1440w`"
          sizes="(max-width: 670px) 100vw, (max-width: 900px) 67vw, 600px"
          :alt="`Hero photo of ${address}`"
          width="720"
          height="480"
          class="size-full object-cover hover-zoom"
          :loading="eager ? 'eager' : 'lazy'"
        />
      </div>

      <template v-if="images?.length">
        <div v-for="(image, i) in images" :key="image" class="thumbnail__photo">
          <NuxtImg
            :src="image"
            :alt="`Photo ${i + 1} of ${address}`"
            class="size-full object-cover hover-zoom"
            loading="lazy"
          />
        </div>
      </template>
    </section>
  </div>
</template>

<style scoped>
@reference "tailwindcss";

.thumbnail {
  @apply grid grid-cols-2 gap-1 rounded-lg overflow-hidden;
  @apply @2xl:grid-cols-3 @2xl:grid-rows-2 @5xl:grid-cols-4;
}

.thumbnail__hero {
  @apply col-span-2 aspect-[5/4] bg-neutral-200 overflow-hidden @2xl:row-span-2;
}

.thumbnail__photo {
  @apply aspect-[5/4] bg-neutral-200 overflow-hidden;
}

.thumbnail__photo:nth-child(n + 4) {
  @apply hidden @5xl:block;
}
</style>
