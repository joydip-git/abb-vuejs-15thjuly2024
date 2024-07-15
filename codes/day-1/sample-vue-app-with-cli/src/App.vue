<template>
  <h3>Vue JS Components</h3>
  <div>
    <counter-comp></counter-comp>
    <br />
    <CounterComp />
    <br />
    <WelcomeComp />
  </div>
</template>

<script>
  import CounterComp from "./components/counter-comp/CounterComp.vue";
  import WelcomeComp from "./components/welcome-comp/WelcomeComp.vue";

  const App = {
    components: {
      CounterComp,
      WelcomeComp,
    },
  };

  export default App;
</script>

<style lang="css" scoped>
  h3 {
    background-color: brown;
    color: whitesmoke;
    text-align: center;
    font-family: "Courier New", Courier, monospace;
  }
</style>
