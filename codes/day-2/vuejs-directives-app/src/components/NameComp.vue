<template>
  <h3>Data Binding</h3>
  <div>
    <label for="txtName">Name: &nbsp;</label>
    <input
      type="text"
      id="txtName"
      :value="nameValue"
      @input="updateName($event.target.value)" />
    <br />
    <span>Entered Current Name: &nbsp;{{ nameValue }}</span>
    <br />
    <span v-once> Initial Name: &nbsp;{{ nameValue }} </span>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        nameValue: "enter name here",
      };
    },
    methods: {
      updateName(newName) {
        this.nameValue = newName;
      },
    },
  };
</script>
