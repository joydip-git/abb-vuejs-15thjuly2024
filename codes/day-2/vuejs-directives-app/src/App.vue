<script>
  import NameComp from "./components/NameComp.vue";
  import EventModifiers from "./components/EventModifiers.vue";
  import PeopleList from "./components/PeopleList.vue";
  import PeopleComp from "./components/PeopleComp.vue";

  export default {
    components: {
      NameComp,
      EventModifiers,
      PeopleList,
      PeopleComp,
    },
  };
</script>

<template>
  <header>
    <h2>Welcome to Vue JS directives</h2>
    <br />
    <NameComp />
    <br />
    <EventModifiers />
    <br />
    <br />
    <PeopleList />
    <br />
    <br />
    <PeopleComp />
  </header>
</template>

<!-- <style scoped>
  header {
    line-height: 1.5;
  }

  .logo {
    display: block;
    margin: 0 auto 2rem;
  }

  @media (min-width: 1024px) {
    header {
      display: flex;
      place-items: center;
      padding-right: calc(var(--section-gap) / 2);
    }

    .logo {
      margin: 0 2rem 0 0;
    }

    header .wrapper {
      display: flex;
      place-items: flex-start;
      flex-wrap: wrap;
    }
  }
</style> -->
