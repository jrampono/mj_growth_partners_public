<script setup lang="ts">
defineProps<{
  variant?: 'hero' | 'divider' | 'footer'
}>()
</script>

<template>
  <!-- Hero mountain scene -->
  <svg
    v-if="variant === 'hero'"
    class="absolute bottom-0 left-0 w-full h-auto"
    viewBox="0 0 1440 320"
    preserveAspectRatio="none"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    role="presentation"
  >
    <!-- Far mountains -->
    <path d="M0 320L180 180L320 240L480 140L600 200L720 120L860 190L1000 100L1120 170L1260 80L1440 160V320H0Z" fill="#0A784A" opacity="0.15" />
    <!-- Mid mountains -->
    <path d="M0 320L200 220L360 260L520 180L680 230L820 160L960 220L1100 150L1260 210L1440 180V320H0Z" fill="#0A784A" opacity="0.1" />
    <!-- Trail path -->
    <path d="M0 300Q360 260 720 280Q1080 300 1440 260" stroke="#61CE70" stroke-width="2" stroke-dasharray="8 4" opacity="0.4" fill="none" />
    <!-- Ground -->
    <path d="M0 320L0 290Q360 270 720 285Q1080 300 1440 275L1440 320H0Z" fill="white" />
  </svg>

  <!-- Section divider mountains -->
  <svg
    v-else-if="variant === 'divider'"
    class="w-full h-auto -mb-1"
    viewBox="0 0 1440 80"
    preserveAspectRatio="none"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    role="presentation"
  >
    <path d="M0 80L240 40L480 60L720 20L960 50L1200 30L1440 55V80H0Z" fill="currentColor" opacity="0.06" />
    <path d="M0 80L360 55L720 65L1080 45L1440 60V80H0Z" fill="currentColor" opacity="0.04" />
  </svg>

  <!-- Footer mountain -->
  <svg
    v-else
    class="w-full h-auto -mb-1"
    viewBox="0 0 1440 100"
    preserveAspectRatio="none"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    role="presentation"
  >
    <path d="M0 100L180 60L360 80L540 40L720 70L900 30L1080 60L1260 20L1440 50V100H0Z" fill="#154C49" />
  </svg>
</template>
