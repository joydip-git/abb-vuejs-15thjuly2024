<template>
  <div>
    <label for="txtFilter">Filter By Name: &nbsp;</label>
    <input
      type="text"
      id="txtFilter"
      :value="filterText"
      @input="onFilterTextChanged($event.target.value)" />
  </div>
</template>
<script>
  export default {
    emits: ["filterTextChanged"],
    data() {
      return { filterText: "" };
    },
    methods: {
      onFilterTextChanged(newText) {
        this.filterText = newText;
        this.$emit("filterTextChanged", this.filterText);
      },
    },
  };
</script>
