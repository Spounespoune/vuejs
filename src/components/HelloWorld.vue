<template>
  <h1>Hello World</h1>
  <p>je suis {{ name }} et j'ai {{ age }}</p>
</template>

<script setup>
import {defineProps} from 'vue';

defineProps({
  name: String,
  age: Number,
});
</script>

<style></style>
