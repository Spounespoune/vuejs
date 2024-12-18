<template>
  <HelloWorld @update="(nom) => log(nom)" />
  <div :class="{ green: isActive }">
    {{ user.name }}
  </div>
  <div>
    {{ sentence }}
  </div>

  <div>
    <input v-model="user.name" type="text" />
    <input v-model="user.age" type="text" />
  </div>
</template>

<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import { computed, ref, watch } from "vue";

const user = ref({
  name: "toto",
  age: 30,
});

const sentence = computed(() => {
  return `Bonjour ${user.value.name}`;
});

watch(
  () => user.value.age,
  (newValue, oldValue) => {
    console.log(newValue, oldValue);
  },
);

const isActive = ref(true);

const log = (nom) => {
  console.log(nom);
};
</script>

<style>
.green {
  color: green;
}
</style>
