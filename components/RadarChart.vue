<script setup lang="ts">
const props = defineProps<{
  scores: { name: string; average: number }[]
  size?: number
}>()

const s = computed(() => props.size || 320)
const cx = computed(() => s.value / 2)
const cy = computed(() => s.value / 2)
const radius = computed(() => (s.value / 2) - 40)

function polarToCartesian(angle: number, r: number) {
  const rad = ((angle - 90) * Math.PI) / 180
  return {
    x: cx.value + r * Math.cos(rad),
    y: cy.value + r * Math.sin(rad),
  }
}

const axes = computed(() => {
  const count = props.scores.length
  return props.scores.map((score, i) => {
    const angle = (360 / count) * i
    const end = polarToCartesian(angle, radius.value)
    const labelPos = polarToCartesian(angle, radius.value + 24)
    return { ...score, angle, end, labelPos }
  })
})

const gridRings = [1, 2, 3, 4, 5]

function ringPoints(level: number) {
  const r = (radius.value / 5) * level
  const count = props.scores.length
  return Array.from({ length: count }, (_, i) => {
    const angle = (360 / count) * i
    const p = polarToCartesian(angle, r)
    return `${p.x},${p.y}`
  }).join(' ')
}

const dataPoints = computed(() => {
  const count = props.scores.length
  return props.scores.map((score, i) => {
    const angle = (360 / count) * i
    const r = (radius.value / 5) * score.average
    return polarToCartesian(angle, r)
  })
})

const dataPolygon = computed(() => {
  return dataPoints.value.map(p => `${p.x},${p.y}`).join(' ')
})
</script>

<template>
  <svg :width="s" :height="s" :viewBox="`0 0 ${s} ${s}`" class="mx-auto">
    <!-- Grid rings -->
    <polygon
      v-for="level in gridRings"
      :key="level"
      :points="ringPoints(level)"
      fill="none"
      stroke="#E5E7EB"
      stroke-width="1"
    />

    <!-- Axis lines -->
    <line
      v-for="axis in axes"
      :key="axis.name"
      :x1="cx"
      :y1="cy"
      :x2="axis.end.x"
      :y2="axis.end.y"
      stroke="#E5E7EB"
      stroke-width="1"
    />

    <!-- Data polygon -->
    <polygon
      :points="dataPolygon"
      fill="#0D8B5A"
      fill-opacity="0.15"
      stroke="#0D8B5A"
      stroke-width="2.5"
    />

    <!-- Data dots -->
    <circle
      v-for="(point, i) in dataPoints"
      :key="i"
      :cx="point.x"
      :cy="point.y"
      r="4"
      fill="#0D8B5A"
    />

    <!-- Labels -->
    <text
      v-for="axis in axes"
      :key="'label-' + axis.name"
      :x="axis.labelPos.x"
      :y="axis.labelPos.y"
      text-anchor="middle"
      dominant-baseline="middle"
      class="fill-brand-grey text-[9px] font-medium"
    >
      {{ axis.name }}
    </text>

    <!-- Score values on dots -->
    <text
      v-for="(point, i) in dataPoints"
      :key="'score-' + i"
      :x="point.x"
      :y="point.y - 12"
      text-anchor="middle"
      class="fill-brand-teal text-[10px] font-bold"
    >
      {{ scores[i].average }}
    </text>
  </svg>
</template>
