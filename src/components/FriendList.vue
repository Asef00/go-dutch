<template>
  <ul>
    <li v-for="friend in friends" :key="friend.id">{{ friend.name }}, {{ friend.age }}</li>
  </ul>
</template>

<script setup lang="ts">
import { liveQuery } from 'dexie'
import { useObservable } from '@vueuse/rxjs'
import { db } from '@/db'
import type { Friend } from '@/models/friend'

const friends: Friend[] = useObservable(liveQuery(() => db.friends.toArray()))
</script>
