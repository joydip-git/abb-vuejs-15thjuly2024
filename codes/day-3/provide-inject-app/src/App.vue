<script>
  import { computed } from "vue";
  import TestParent from "./components/TestParent.vue";

  export default {
    components: {
      TestParent,
    },
    data() {
      return {
        counter: 0,
      };
    },
    provide() {
      return {
        count: computed(() => this.counter),
      };
    },
  };
</script>

<template>
  <div>
    <button
      type="button"
      @click="counter += 1">
      Increase
    </button>
    <br />
    <span>Parent counter: &nbsp; {{ counter }}</span>
    <br />
    <TestParent />
  </div>
</template>

<style scoped>
  header {
    line-height: 1.5;
  }

  .logo {
    display: block;
    margin: 0 auto 2rem;
  }

  @media (min-width: 1024px) {
    header {
      display: flex;
      place-items: center;
      padding-right: calc(var(--section-gap) / 2);
    }

    .logo {
      margin: 0 2rem 0 0;
    }

    header .wrapper {
      display: flex;
      place-items: flex-start;
      flex-wrap: wrap;
    }
  }
</style>
