<script setup lang="ts">
import AppFooter from '~/components/common/AppFooter.vue'
import AppHeader from '~/components/common/AppHeader.vue'
</script>

<template>
  <div class="grid min-h-screen grid-rows-[auto_1fr_auto]">
    <AppHeader />
    <main class="container mx-auto p-4">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
