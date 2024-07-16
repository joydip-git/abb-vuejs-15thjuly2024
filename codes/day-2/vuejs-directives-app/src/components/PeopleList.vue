<template>
  <span v-if="!people"> List of records undefined </span>
  <div v-else-if="people && people.length > 0">
    <h3>List of Items</h3>
    <br />
    <ul>
      <!-- <li
      v-for="(p, index) in people"
      :key="p">
      {{ index }} {{ p.name }}
    </li> -->
      <li
        v-for="p in people"
        :key="p.id">
        {{ p.name }} {{ p.salary }}
      </li>
    </ul>
  </div>
  <span v-else> No records... </span>
  <br />
  <br />
  <button
    type="button"
    @click="sort">
    Sort People
  </button>
</template>
<script>
  export default {
    data() {
      return {
        people: [],
      };
    },
    methods: {
      sort() {
        this.people.sort((p1, p2) =>
          p1.name.toLocaleLowerCase().localeCompare(p2.name.toLocaleLowerCase())
        );
      },
    },
  };
</script>
