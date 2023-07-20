<template>
  <div>
    <p>{{ number }}</p>
    <HomeView :title="title" @increamentEvent="number++"/>
  </div>
</template>

<script setup>
import { $ref } from "vue/macros";
import { $$ } from "vue/macros";
import { ref, watch } from "vue";
import HomeView from "./components/HomeView.vue";

const title = $ref("HomePage");
// const msg = "this is mobina";
const count1 = ref(0);
let count2 = $ref(0);

let number = $ref(0);
trackChange($$(number));

function trackChange(x) {
  watch(x, () => {
    console.log("x changes");
  });
}
console.log(count1, count2);
</script>
