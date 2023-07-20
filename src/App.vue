<template>
  <div>{{ count2 }}</div>
</template>

<script setup>
import { $ref } from "vue/macros";
import { ref } from "vue";
// import HomeView from "./components/HomeView.vue";

// const msg = "this is mobina";
const count1 = ref(0);
let count2 = $ref(0);

console.log(count1, count2);
</script>
