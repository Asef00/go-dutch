<template>
  <fieldset>
    <legend>Add new friend</legend>
    <VInput v-model="friendName" type="text" label="Name:" placeholder="Enter your friend's name" />
    <br />
    <VInput v-model="friendAge" type="number" label="Age:" placeholder="Enter your friend's name" />
    <br />
    <button @click="addFriend">Add Friend</button>
    <p>{{ status }}</p>
  </fieldset>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { db } from '../db'
import VInput from './VInput.vue'

const props = defineProps({
  defaultAge: {
    type: Number,
    default: 21
  }
})

const status = ref('')
const friendName = ref('')
const friendAge = ref(props.defaultAge)

const addFriend = async () => {
  try {
    // Add the new friend!
    const id = await db.friends.add({
      name: friendName.value,
      age: friendAge.value
    })

    status.value = `Friend ${friendName.value} successfully added. Got id ${id}`

    // Reset form:
    friendName.value = ''
    friendAge.value = props.defaultAge
  } catch (error) {
    status.value = `Failed to add ${friendName.value}: ${error}`
  }
}
</script>
