<template>
  <div id="item-list">
    <ol>
      <i style="display: none"></i>
      <li v-for="item in items" :key="item.id">
        <v-item :item="item"/>
      </li>
    </ol>
  </div>
</template>

<script>
import Item from "./Item.vue";
export default {
  name: "ItemList",
  components: {
    "v-item": Item
  },
  computed: {
    items() {
      return this.$store.state.items;
    }
  }
};
</script>
