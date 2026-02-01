<script setup lang="ts">
defineProps<{
  color?: string
  accent?: string
  size?: number
}>()
</script>

<template>
  <svg :width="size || 48" :height="size || 48" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- MJ Monogram -->
    <path
      d="M8 48V16L18 32L28 16V48"
      :stroke="color || '#0D8B5A'"
      stroke-width="4"
      stroke-linecap="round"
      stroke-linejoin="round"
      fill="none"
    />
    <path
      d="M36 16V40C36 44 38 48 44 48C50 48 52 44 52 40"
      :stroke="color || '#0D8B5A'"
      stroke-width="4"
      stroke-linecap="round"
      fill="none"
    />
    <!-- Accent dot -->
    <circle cx="52" cy="16" r="3" :fill="accent || '#61CE70'" />
  </svg>
</template>
