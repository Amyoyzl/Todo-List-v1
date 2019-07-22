<template>
  <div id="item-list">
    <ol>
      <i style="display: none"></i>
      <li>
        <v-item />
      </li>
      <li>
        <v-item />
      </li>
      <li>
        <v-item />
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
  }
};
</script>
