<script setup lang="ts">
import IconHome from '~/components/icon/Home.vue'
</script>

<template>
  <header class="bg-primary-50 h-15 flex items-center justify-around">
    <nav class="container h-full px-4">
      <NuxtLink href="/" class="h-full flex items-center gap-2">
        <IconHome class="text-white" />
        <span class="text-white">Home</span>
      </NuxtLink>
    </nav>
  </header>
</template>
