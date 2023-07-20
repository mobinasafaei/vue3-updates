<template>
  <div>
    <button @click="count++">Increament</button>
    <h2>{{ count }}</h2>
    <button @click="count--">decrement</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const count = ref(0);
</script>