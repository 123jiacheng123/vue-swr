<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { ref } from "vue";
const selected = ref("A");

const options = ref([
  { text: "One", value: "A" },
  { text: "Two", value: "B" },
  { text: "Three", value: "C" },
]);

function handleScreen() {}
</script>

<template>
  <router-view></router-view>
</template>

<style lang="scss" scoped>
</style>>
