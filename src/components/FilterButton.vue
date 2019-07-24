<template>
  <a @click="filter(method)">{{ method }}</a>
</template>

<script>
export default {
  name: "filterButton",
  props: ["method"],
  methods: {
    filter(method) {
      this.$store.commit("CHANGE_SHOW_ALL", method == "All" ? true : false);
      this.$store.commit("CHANGE_SHOW_ACTIVE", method == "Active" ? true : false);
    }
  }
};
</script>