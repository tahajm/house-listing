<script setup lang="ts">
const route = useRoute();
const id = route.params.id;

const { data, pending, error } = await useFetch(`/api/listings/${id}`);

const { headPhoto, extraGalleryPhotos, photos } = extractPhotos(
  data.value?.Media,
);

const isGalleryOpen = ref(false);

useSeoMeta({
  title: () => `Listing at ${data.value?.Adres ?? ''}`,
  description: () =>
    `Check the details of the listing at ${data.value?.Adres ?? ''}.`,
  ogTitle: () => `Listing at ${data.value?.Adres ?? ''}`,
  ogDescription: () =>
    `Check the details of the listing at ${data.value?.Adres ?? ''}.`,
  ogImage: () => headPhoto?.large,
});
</script>
<template>
  <AppLoading v-if="pending" />
  <AppErrorMessage v-else-if="error" :message="error.statusMessage" />
  <p v-else-if="!data" role="status">No data to show</p>
  <div v-else>
    <PhotoGrid
      v-if="headPhoto"
      :head-photo="headPhoto"
      :extra-photos="extraGalleryPhotos.map((m) => m.medium)"
      :address="data.Adres"
      eager
    />

    <button
      v-if="photos.length"
      class="btn-text mt-2 border border-secondary"
      @click="isGalleryOpen = true"
    >
      All photos
    </button>

    <section class="flex flex-col gap-2 border-t mt-4 border-neutral-200 py-6">
      <h1 class="text-2xl font-medium">{{ data.Adres }}</h1>
      <p class="text-neutral-600">{{ data.Postcode }} {{ data.Plaats }}</p>
      <PriceTag :price="data.Koopprijs" class="text-lg" />
      <HouseOverview
        variant="extended"
        :living-area="data.WoonOppervlakte"
        :rooms="data.AantalKamers"
        :plot-area="data.PerceelOppervlakte"
        :energy-label="data.Energielabel.Label"
      />
    </section>

    <HouseDescription
      v-if="data.VolledigeOmschrijving"
      :text="data.VolledigeOmschrijving"
    />

    <LocationMap
      v-if="data.WGS84_Y && data.WGS84_X"
      :lat="data.WGS84_Y"
      :lng="data.WGS84_X"
      :address="data.Adres"
    />

    <PhotoGallery v-model="isGalleryOpen" :photos="photos" />
  </div>
</template>
