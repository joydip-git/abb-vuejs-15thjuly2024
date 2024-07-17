<script>
  import { mapState, mapMutations, mapActions } from "vuex";
  export default {
    // computed: mapState({
    //   count: (state) => state.counter,
    //   nameValue: (state) => state.name,
    // }),
    computed: {
      ...mapState([
        "counter",
        "name",
        "products",
        "errorInfo",
        "fetchComplete",
      ]),
    },
    methods: {
      // increaseCounter() {
      //   this.$store.commit("increase",{value:10});
      //   this.$store.commit("increase",10);
      //   this.$store.dispatch("fetchProducts")
      // },
      //increase:"increase"
      ...mapMutations(["increase"]),
      ...mapActions(["fetchProducts"]),
    },
  };
</script>
<template>
  <span>Counter: &nbsp; {{ counter }}</span>
  <br />
  <span> Name: &nbsp;{{ name }} </span>
  <br />
  <!-- <button
    type="button"
    @click="increase({ value: 10 })">
    Increase
  </button> -->
  <button
    type="button"
    @click="increase(10)">
    Increase
  </button>
  <br />
  <br />
  <button
    type="button"
    @click="fetchProducts">
    Load
  </button>
  <br />
  <ul>
    <li
      v-for="p in products"
      :key="p.id">
      <ul>
        {{
          p.title
        }}
      </ul>
    </li>
  </ul>
</template>
