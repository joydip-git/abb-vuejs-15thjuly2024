<template>
  <div>
    <counter-comp />
    <br />
    <CounterComp />
    <br />
    <WelcomeComp />
  </div>
</template>

<script setup>
  import CounterComp from "./components/CounterComp/CounterComp.vue";
  import WelcomeComp from "./components/WelcomeComp/WelcomeComp.vue";

  /**
   * export default {
    components: {
      CounterComp,
      WelcomeComp,
    },
  };
   */
</script>
