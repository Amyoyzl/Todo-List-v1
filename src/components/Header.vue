<template>
  <div id="header">
    <h2>{{ title }}</h2>
    <p>
      <em>{{ hint }}</em>
    </p>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      title: "Jquery To Do List",
      hint: "Simple Todo List with adding and filter by diff status."
    };
  }
};
</script>