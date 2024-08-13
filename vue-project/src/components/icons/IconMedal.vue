<script setup lang="ts">
import { computed, defineProps } from 'vue';

const props = defineProps<{
  medal: 'gold' | 'silver' | 'bronze'
  total: number
}>()

const color = computed(() => {
  if (props.medal === 'gold') {
    return 'gold'
  } else if (props.medal === 'silver') {
    return 'silver'
  } else {
    return '#cd7f32'
  }
})
</script>

<template>
  <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
    <circle cx="25" cy="25" r="20" :fill="color" stroke="black" stroke-width="2" />
    <text
      x="50%"
      y="50%"
      text-anchor="middle"
      fill="black"
      font-size="18px"
      font-family="Arial"
      dy=".3em"
    >
      {{ total }}
    </text>
  </svg>
</template>
