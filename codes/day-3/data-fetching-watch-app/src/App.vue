<script>
  import TodoList from "./components/TodoList.vue";

  export default {
    data: function () {
      return {
        show: false,
      };
    },
    components: {
      TodoList,
    },
  };
</script>

<template>
  <div>
    <button
      type="button"
      @click="show = !show">
      {{ show ? "Hide" : "Show" }}
    </button>
    <div v-if="show"><TodoList /></div>
  </div>
</template>

<style scoped>
  header {
    line-height: 1.5;
  }
</style>
