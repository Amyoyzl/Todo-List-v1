<template>
  <div id="filters">
    <ul id="filters">
      <li v-for="method in filterMethods" :key="method">
        <v-filter-button :method="method" />
      </li>
    </ul>
  </div>
</template>

<script>
import FilterButton from "./FilterButton";
export default {
  name: "filters",
  components: {
    "v-filter-button": FilterButton
  },
  computed: {
    filterMethods() {
      return this.$store.state.filterMethods;
    }
  }
};
</script>
