<script setup lang="ts">
import type { NuxtError } from '#app';

const props = defineProps<{ error: NuxtError }>();

const message = computed(() =>
  props.error.statusCode === 404
    ? '404 page not found'
    : props.error.statusMessage,
);

function handleBackHome() {
  clearError({ redirect: '/' });
}
</script>

<template>
  <NuxtLayout>
    <div class="flex flex-col items-center gap-4 p-4">
      <AppErrorMessage :message="message" />
      <button type="button" class="btn-text" @click="handleBackHome">
        Back to listings
      </button>
    </div>
  </NuxtLayout>
</template>
