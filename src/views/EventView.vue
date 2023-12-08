<template>
  <div class="blog-post-details">
    <h1>{{ id }}</h1>
    <button @click="goBack">Go Back</button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const id = router.currentRoute.value.params.id

const goBack = () => {
  router.back()
}
</script>
