<script setup lang="ts">
type Props = { price: number | null }
defineProps<Props>()
</script>

<template>
  <span v-if="price" class="font-semibold truncate">
    € {{ price.toLocaleString('nl-NL') }} k.k.
  </span>
  <span v-else class="text-neutral-600 truncate"> Price on request </span>
</template>
