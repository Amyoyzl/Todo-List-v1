<template>
  <div id="item-list">
    <ol>
      <i style="display: none"></i>
      <li v-for="item in items" :key="item.id" v-show="showItems(item)">
        <v-item :item="item"/>
      </li>
    </ol>
  </div>
</template>

<script>
import Item from "./Item.vue"
import { mapGetters, mapActions } from 'vuex'
export default {
  name: "ItemList",
  components: {
    "v-item": Item
  },
  computed: {
    ...mapGetters(['items']),
  },
  mounted(){
    this.getItems();
  },
  methods: {
    ...mapActions({
      getItems: 'loadTodos'
    }),
    showItems(item) {
      let showAll = this.$store.getters.showAll;
      return showAll ? true : (this.$store.getters.showActive ? !item.isChecked : item.isChecked);
    }
  }
};
</script>
