<template>
  <h3>Parent</h3>
  <br />
  <NestedComp />
</template>

<script>
  import NestedComp from "./NestedComp.vue";

  export default {
    components: {
      NestedComp,
    },
  };
</script>
