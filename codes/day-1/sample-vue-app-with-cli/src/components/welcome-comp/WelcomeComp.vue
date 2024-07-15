<template>
  <div>
    <label for="txtFirstName"> First Name: &nbsp; </label>
    <input
      type="text"
      id="txtFirstName"
      v-model="firstName" />
  </div>
  <div>
    <label for="txtLastName">Last Name: &nbsp;</label>
    <input
      type="text"
      id="txtLastName"
      v-model="lastName" />
  </div>
  <div>
    <span>Full Name: &nbsp;{{ getFullName() }}</span>
    <br />
    <span>Full Name: &nbsp;{{ fullName }}</span>
  </div>
  <br />
  <div>Message:&nbsp; {{ message }}</div>
  <br />
  <button
    type="button"
    v-on:click="changeMessage('welcome to event binding')">
    Change Message
  </button>
</template>

<script>
  export default {
    data() {
      return {
        firstName: "",
        lastName: "",
        message: "Welcome to Vue JS binding",
      };
    },
    methods: {
      getFullName() {
        console.log("getting full name");
        return this.firstName + " " + this.lastName;
      },
      changeMessage(newMessage) {
        this.message = newMessage;
      },
    },
    computed: {
      fullName() {
        console.log("computing full name");
        return this.firstName + " " + this.lastName;
      },
    },
  };
</script>

<style scoped></style>
