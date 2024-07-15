<template>
  <div>
    <span> Counter:&nbsp;{{ counter }} </span>
    <br />
    <button
      type="button"
      v-on:click="increase">
      Increase
    </button>
  </div>
</template>

<script setup>
  import { ref } from "vue";

  //replacement of data option
  const counter = ref(0);
  const increase = () => {
    counter.value++;
  };
</script>

<style scoped></style>
