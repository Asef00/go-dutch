<script setup lang="ts">
import EventItem from '@/components/EventItem.vue';

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
    <ul v-else class="events_list">
      <EventItem v-for="event in events" :key="event.id">{{ event }}</EventItem>
    </ul>
  </main>
</template>
