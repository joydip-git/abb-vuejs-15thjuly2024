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

<script setup>
  import { computed, ref } from "vue";

  const firstName = ref("");
  const lastName = ref("");
  const message = ref("Welcome to Vue JS binding");

  const getFullName = () => {
    console.log("getting full name");
    return firstName.value + " " + lastName.value;
  };
  const changeMessage = (newMessage) => {
    message.value = newMessage;
  };

  const fullName = computed(() => {
    console.log("computing full name");
    return firstName.value + " " + lastName.value;
  });
</script>
