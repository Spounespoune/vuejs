<template>
  <h1>Hello World</h1>

  <input v-model="nom" type="text" @input="handleUpdate" />
</template>

<script setup>
import { defineEmits, ref } from "vue";

const emit = defineEmits(["update"]);

const nom = ref("");

const handleUpdate = (event) => {
  emit("update", event.target.value);
};
</script>

<style></style>
