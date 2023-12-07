<template>
  <li class="event" :style="{ backgroundColor: props.event.color }" @click="handleEventClick">
    {{ props.event.name }}
  </li>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

interface Event {
  id: number
  name: string
  people: string[]
  color: string
}

const props = defineProps<{
  event: Event
}>()
const emits = defineEmits(['eventClick'])

const handleEventClick = () => {
  emits('eventClick', props.event.id) // Emit the event with the event ID
}
</script>
