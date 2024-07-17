<template>
  <h3>Nested</h3>
  <br />
  <span> Count Value &nbsp; {{ count }} </span>
  <br />
  <span> Counter Value &nbsp; {{ counterValue }} </span>
  <!-- <span> Counter Value &nbsp; {{ updatedCounterValue }} </span> -->
</template>

<script>
  import { computed } from "vue";

  //import { computed } from "vue";

  export default {
    //inject: ["count"],
    inject: {
      count: {
        from: "count",
        default: 0,
      },
    },
    data() {
      return {
        //counterValue: this.count,
        counterValue: computed(() => this.count),
      };
    },
    // computed: {
    //   updatedCounterValue() {
    //     return this.counterValue + this.count;
    //   },
    // },
  };
</script>
