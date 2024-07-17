<script>
  import TodoList from "./components/TodoList.vue";

  export default {
    components: {
      TodoList,
    },
  };
</script>

<template>
  <div>
    <TodoList />
  </div>
</template>

<style scoped>
  header {
    line-height: 1.5;
  }
</style>
