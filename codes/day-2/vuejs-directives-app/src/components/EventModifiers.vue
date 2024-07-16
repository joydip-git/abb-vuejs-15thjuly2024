<template>
  <h3>Event Modifiers</h3>
  <form @submit.prevent="submit">
    <div>
      <label for="txtName">Name: &nbsp;</label>
      <input
        type="text"
        id="txtName"
        :value="nameValue"
        @keyup.enter="updateName($event.target.value)" />
      <br />
    </div>
    <div>
      <!-- <input
        type="submit"
        value="Submit"
        @submit.self.stop="call" /> -->
      <input
        type="submit"
        value="Submit" />
    </div>
  </form>

  <span>Entered Current Name: &nbsp;{{ nameValue }}</span>
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
      //   submit(e) {
      //     e.preventDefault();
      //     alert("data submitted");
      //     this.nameValue = newName;
      //   },
      submit() {
        alert("data submitted");
        //this.nameValue = newName;
      },
      call() {
        alert("called");
      },
    },
  };
</script>
