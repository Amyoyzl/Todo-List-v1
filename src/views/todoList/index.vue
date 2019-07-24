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
import Header from "@/components/Header";
import AddItem from "@/components/AddItem.vue";
import ItemList from "@/components/ItemList.vue";
import Filters from "@/components/Filters.vue";
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