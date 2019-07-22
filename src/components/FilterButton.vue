<template>
  <a @click="filter(method)">{{ method }}</a>
</template>

<script>
export default {
  name: "filterButton",
  props: ["method"],
  methods: {
    filter(method) {
      this.$store.commit("filter", method);
    }
  }
};
</script>