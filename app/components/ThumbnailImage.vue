<script setup lang="ts">
import type { Thumbnail } from '~~/shared/types/funda-shared'

type Props = {
  heroImage: Required<Thumbnail>
  address: string
  images?: Thumbnail[]
  eager?: boolean
}

withDefaults(defineProps<Props>(), { eager: false })
</script>

<template>
  <div class="@container">
    <section class="thumbnail" :class="images?.length ? 'grid-rows-2' : 'grid-rows-1'">
      <div class="thumbnail__hero">
        <NuxtImg
          :src="heroImage.large"
          :alt="`Hero photo of ${address}`"
          class="size-full object-cover"
          :loading="eager ? 'eager' : 'lazy'"
        />
      </div>

      <template v-if="images?.length">
        <div v-for="(image, i) in images" :key="image.small" class="thumbnail__photo">
          <NuxtImg
            :src="image.medium ?? image.small"
            :alt="`Photo ${i + 1} of ${address}`"
            class="size-full object-cover"
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
  @apply grid grid-cols-2 gap-1 rounded-lg overflow-hidden max-h-72;
  @apply @md:grid-cols-3 @md:max-h-112 @5xl:grid-cols-4;
}

.thumbnail__hero {
  @apply col-span-2 row-span-1 @md:row-span-2;
}

.thumbnail__photo:nth-child(n + 4) {
  @apply hidden @5xl:block;
}
</style>
