<template>
  <br />
  <h3>Nested Component</h3>

  <!--if you have NOT defined nameValue property, use built-in property "$attrs" -->
  <!-- <span>Name:&nbsp;{{ $attrs.nameValue }}</span> -->

  <!--if you have NOT used "default" property while defining props-->
  <!-- <span>Name:&nbsp;{{ nameValue ? nameValue : "No name passed" }}</span> -->

  <!--if you have used "default" property while defining props -->
  <span>Nested Name:&nbsp;{{ nameValue }}</span>
  <br />
  <div>
    <label for="txtName">Name: &nbsp;</label>
    <input
      type="text"
      id="txtName"
      :value="nameTxt"
      @keyup.enter="nameTxtChanged($event.target.value)" />
  </div>
</template>
<script>
  export default {
    //props: ["nameValue"],
    // props: {
    //   nameValue: String,
    // },
    props: {
      nameValue: {
        type: [String, null],
        required: true,
        default: "No Name",
        // validator: function (value, props) {
        //   if (typeof value !== "string") return false;
        //   else return true;
        // },
      },
    },
    emits: ["nameValueChanged"],
    data() {
      return {
        nameTxt: "",
      };
    },
    methods: {
      nameTxtChanged(newName) {
        this.nameTxt = newName;
        this.$emit("nameValueChanged", this.nameTxt);
      },
    },
    computed: {},
  };
</script>
