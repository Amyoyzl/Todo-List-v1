<template>
  <div id="todo-list">
    <v-header />
    <v-add-item />
    <br>
    <v-item-list />
    <v-filters />
  </div>
</template>

<script>
import Header from "./Header.vue";
import AddItem from "./AddItem.vue";
import ItemList from "./ItemList.vue";
import Filters from "./Filters.vue";
export default {
  name: "TodoList",
  components: {
    "v-header": Header,
    "v-add-item": AddItem,
    "v-item-list": ItemList,
    "v-filters": Filters
  }
};
</script>