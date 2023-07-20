<template>
  <div>
    <h1>{{ props.title }}</h1>
    <button @click="$emit('increamentEvent')">Increament</button>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps(['title']);
</script>
