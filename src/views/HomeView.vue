<script setup lang="ts">
interface Event {
  id: number
  name: string
  people: string[]
  color: string
}

const events: Event[] = [{ id: 1, name: 'Trip', people: ['Asef', 'Feri'], color: 'green' }]
</script>

<template>
  <main>
    <h1>Events</h1>
    <div v-if="!events.length">...No Events...</div>
    <div v-else v-for="event in events" :key="event.id">{{ event }}</div>
  </main>
</template>
