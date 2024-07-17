<template>
  <div v-if="fetchingComplete">
    <div v-if="errorInfo === ''">
      <div v-if="todo !== null">
        <span> Title: &nbsp;{{ todo.title }} </span>
        <br />
        <span>Id: &nbsp;{{ todo.id }} </span>
        <br />
        <span>Task for: &nbsp; {{ todo.userId }}</span>
        <br />
        <span> Completed: &nbsp; {{ todo.completed ? "yes" : "no" }} </span>
      </div>
      <div v-else>
        <span>No such record exist</span>
      </div>
    </div>
    <div v-else>
      <span>{{ errorInfo }}</span>
    </div>
  </div>
  <div v-else>
    <span> Loading.... </span>
  </div>
</template>
<script>
  import { getTodo } from "@/services/todoservice";

  export default {
    props: {
      selectedId: {
        type: Number,
        required: true,
        default: 0,
      },
    },
    data() {
      return {
        todo: null,
        fetchingComplete: false,
        errorInfo: "",
      };
    },
    methods: {
      async fetchTodo() {
        try {
          const resp = await getTodo(this.$props.selectedId);
          if (resp.status === 200) {
            this.todo = resp.data;
            this.errorInfo = "";
            this.fetchingComplete = true;
          } else {
            this.todo = null;
            this.errorInfo = resp.statusText;
            this.fetchingComplete = true;
          }
        } catch (error) {
          this.todo = null;
          this.errorInfo = error.message;
          this.fetchingComplete = true;
        }
      },
    },
    //if you are using mounted() then don't set immediate=true in watcher for selectedId
    mounted() {
      this.fetchTodo();
    },
    watch: {
      selectedId: {
        handler(newId, oldId) {
          if (newId !== oldId) this.fetchTodo();
        },
        //immediate: true,
      },
    },
  };
</script>
