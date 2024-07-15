<template>
  <div>
    <span> Counter: &nbsp; {{ counter }} </span>
    <br />
    <button
      type="button"
      v-on:click="increase">
      Increase
    </button>
  </div>
</template>

<script>
  //Component set-up

  export default {
    data() {
      return {
        counter: 0,
      };
    },
    methods: {
      increase() {
        this.counter++;
      },
    },
  };
</script>

<style lang="css" scoped>
  div {
    background-color: aquamarine;
  }
  span {
    background-color: burlywood;
    font-family: "Courier New", Courier, monospace;
  }
  button {
    height: 50px;
    width: 80px;
    background-color: blueviolet;
    border-color: blueviolet;
    border-radius: 5px;
    border-style: solid;
    border-width: 1px;
    color: white;
  }
</style>
