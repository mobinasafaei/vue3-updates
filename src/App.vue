<template>
  <div>
    <h2>{{ msg }}</h2>
    <h3 @click="increament()">{{ count }}</h3>
    <HomeView />
  </div>
</template>

<script setup>
import { ref } from "vue";
import HomeView from "./components/HomeView.vue";

console.log("start");
const msg = "this is mobina";
const count = ref(0);
function increament() {
  count.value++;
}
</script>
