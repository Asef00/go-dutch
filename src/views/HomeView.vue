<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { Event } from '@/models/event'
import EventItem from '@/components/EventItem.vue'
import VInput from '@/components/VInput.vue'

const events: Event[] = reactive([
  { id: 1, name: 'Trip', people: ['Asef', 'Feri'], color: '#432626' },
  {
    id: 2,
    name: 'سفر جنوب',
    people: ['Asef', 'Alan', 'Ali', 'Milad', 'Hanieh', 'Setayesh'],
    color: '#365036'
  }
])

const newEvent = ref('')

const createNewEvent = () => {
  events.push({ id: events.length + 1, name: newEvent.value, people: [], color: '#fff' })
}

const handleEventClick = (eventId: number) => {
  // Handle the event click
  console.log('Event clicked! ID:', eventId)
}
</script>

<template>
  <main>
    <h1>Events</h1>
    <div v-if="!events.length">...No Events...</div>
    <ul v-else class="events_list">
      <EventItem
        v-for="event in events"
        :key="event.id"
        :event="event"
        @eventClick="handleEventClick"
      />
    </ul>
    <form @submit.prevent="createNewEvent">
      <VInput v-model="newEvent" label="Create New Events" type="text" placeholder="Event name" />
      <button type="submit">Create</button>
    </form>
  </main>
</template>
