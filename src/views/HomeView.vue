<script setup lang="ts">
const events = []
</script>

<template>
  <main>
    <h1>Events</h1>
    <div v-if="!events.length">...No Events...</div>
    <div v-else v-for="event in events" :key="event">{{ event }}</div>
  </main>
</template>
