<template>
  <ul>
    <li v-for="friend in friends" :key="friend.id">{{ friend.name }}, {{ friend.age }}</li>
  </ul>
</template>

<script setup lang="ts">
import { liveQuery } from 'dexie'
import { db } from '@/db'
import type { Friend } from '@/models/friend'
import { onMounted, ref } from 'vue'

const friends = ref<Friend[]>([])

onMounted(() => {
  liveQuery(() => db.friends.toArray()).subscribe((result: Friend[]) => {
    friends.value = result
  })
})
</script>
