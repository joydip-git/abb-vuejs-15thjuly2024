<template>
  <h3>Parent Component</h3>
  <span>Parent Name: &nbsp;{{ name }}</span>
  <br />
  <div>
    <!-- <button
      type="button"
      @click="name = 'joydip'">
      Change
    </button> -->
    <NestedComp
      :nameValue="name"
      @nameValueChanged="updateName($event, 100)" />
  </div>
</template>
<script>
  import NestedComp from "./NestedComp.vue";

  export default {
    data() {
      return {
        name: "Anil",
      };
    },
    components: {
      NestedComp,
    },
    methods: {
      updateName(newName, data) {
        console.log(data);
        alert(newName);
        this.name = newName;
      },
    },
  };
</script>
