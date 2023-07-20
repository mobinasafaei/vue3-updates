<template>
  <div>
    <h1>{{ props.title }}</h1>
    <button @click="increamentEvent">Increament</button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const emit = defineEmits(["increamentEvent"]);

function increamentEvent() {
  emit("increamentEvent", 3);
}

const props = defineProps(["title"]);
</script>
