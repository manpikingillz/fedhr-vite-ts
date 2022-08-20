<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
<dev>
  <h1>{{ msg }}</h1>

  <h1 class="read-the-docs">The New FedHR App - A complete HR System</h1>
</dev>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
