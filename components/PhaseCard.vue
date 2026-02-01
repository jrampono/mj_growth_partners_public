<script setup lang="ts">
defineProps<{
  phase: number
  name: string
  trail: string
  icon: string
  description: string
  active?: boolean
}>()
</script>

<template>
  <div
    class="relative rounded-2xl p-8 transition-all duration-300 group"
    :class="active
      ? 'bg-brand-teal text-white shadow-xl shadow-brand-teal/20 scale-[1.02]'
      : 'bg-white border border-gray-100 hover:border-brand-teal/20 hover:shadow-lg'
    "
  >
    <!-- Phase number -->
    <div
      class="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold mb-4"
      :class="active ? 'bg-white/20 text-white' : 'bg-brand-teal/10 text-brand-teal'"
    >
      {{ phase }}
    </div>

    <!-- Trail metaphor -->
    <p class="text-xs font-semibold uppercase tracking-wider mb-2 text-brand-green">
      {{ trail }}
    </p>

    <!-- Name -->
    <h3 class="heading-sm mb-3" :class="active ? 'text-white' : 'text-brand-black'">{{ name }}</h3>

    <!-- Description -->
    <p class="text-sm leading-relaxed" :class="active ? 'text-white/80' : 'text-brand-grey'">
      {{ description }}
    </p>

    <!-- Trail connector dot -->
    <div
      class="absolute -bottom-3 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full hidden lg:block"
      :class="active ? 'bg-brand-green' : 'bg-brand-teal/30'"
    />
  </div>
</template>
