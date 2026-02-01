<script setup lang="ts">
const el = ref<HTMLElement>()
const visible = ref(false)
const mounted = ref(false)

defineProps<{
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
}>()

onMounted(() => {
  mounted.value = true
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        visible.value = true
        observer.disconnect()
      }
    },
    { threshold: 0.1 }
  )
  if (el.value) observer.observe(el.value)
})
</script>

<template>
  <div
    ref="el"
    :class="mounted
      ? [
          'transition-all duration-700 ease-out',
          visible
            ? 'opacity-100 translate-y-0 translate-x-0'
            : [
                'opacity-0',
                direction === 'left' ? '-translate-x-8' :
                direction === 'right' ? 'translate-x-8' :
                direction === 'down' ? '-translate-y-8' :
                'translate-y-8'
              ]
        ]
      : ''
    "
    :style="mounted ? { transitionDelay: `${delay || 0}ms` } : undefined"
  >
    <slot />
  </div>
</template>
