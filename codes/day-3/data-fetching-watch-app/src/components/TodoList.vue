<template>
  <h2>List of Todos</h2>
  <br />
  <span v-if="!fetchingComplete"> Loading... </span>
  <table v-else-if="todos.length > 0">
    <thead>
      <tr>
        <th>title</th>
        <th>Done</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="todo in todos"
        :key="todo.id">
        <td>
          <u @click="selectTodo(todo.id)">
            {{ todo.title }}
          </u>
        </td>
        <td>{{ todo.completed ? "yes" : "no" }}</td>
      </tr>
    </tbody>
  </table>
  <span v-else>No records...</span>
  <br />
  <span v-if="errorInfo !== ''">Error: &nbsp; {{ errorInfo }}</span>

  <br /><br />
  <div v-if="selectedToDoId > 0">
    <ToDoDetail :selected-id="selectedToDoId" />
  </div>
  <span v-else>select a todo to view details</span>
</template>

<script>
  import { getTodos } from "../services/todoservice";
  import ToDoDetail from "./ToDoDetail.vue";

  export default {
    components: {
      ToDoDetail,
    },
    data: function () {
      return {
        todos: [],
        errorInfo: "",
        fetchingComplete: false,
        counter: 0,
        selectedToDoId: 0,
      };
    },
    mounted() {
      this.fetchTodos();
    },
    methods: {
      selectTodo(id) {
        this.selectedToDoId = id;
      },
      async fetchTodos() {
        try {
          const resp = await getTodos();
          if (resp.status === 200) {
            this.todos = resp.data.slice(0, 5);
            this.errorInfo = "";
            this.fetchingComplete = true;
          } else {
            this.todos = [];
            this.errorInfo = resp.statusText;
            this.fetchingComplete = true;
          }
        } catch (error) {
          this.todos = [];
          this.errorInfo = error.message;
          this.fetchingComplete = true;
        }
      },
    },
  };
</script>
