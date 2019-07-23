<template>
  <a @click="filter(method)">{{ method }}</a>
</template>

<script>
export default {
  name: "filterButton",
  props: ["method"],
  methods: {
    filter(method) {
      if (method == "All") {
        this.$store.commit("changeShowAll", true);
      } 
      else {
        this.$store.commit("changeShowAll", false);
      }
      if (method == "Active") {
        this.$store.commit("changeShowActive", true);
      } 
      else {
        this.$store.commit("changeShowActive", false);
      }
    }
  }
};
</script>