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

<script>
  import { ref } from "vue";
  export default {
    setup: function () {
      //replacement of data option
      const counter = ref(0);
      const increase = () => {
        counter.value++;
      };
      return {
        counter,
        increase,
      };
    },
  };
</script>

<style scoped></style>
