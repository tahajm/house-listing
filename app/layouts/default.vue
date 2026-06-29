<script setup lang="ts">
import AppFooter from '~/components/common/AppFooter.vue'
import AppHeader from '~/components/common/AppHeader.vue'
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <AppHeader />
    <main class="container mx-auto flex-1 p-4">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
