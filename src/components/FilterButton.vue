<template>
  <a>{{ method }}</a>
</template>

<script>
export default {
  name: "filterButton",
  props: ["method"]
};
</script>