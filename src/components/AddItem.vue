<template>
  <div id="addItem">
    <input class="input-text" type="text" v-model="itemContent" />
    <div id="button" @click="add">Add</div>
  </div>
</template>

<script>
export default {
  name: "AddItem",
  data() {
    return {
      itemContent: "",
      len: 0
    };
  },
  methods: {
    add() {
      if (this.itemContent.length > 0) {
        let item = {
          id: this.len++,
          isChecked: false,
          content: this.itemContent
        };
        this.$store.commit("addItem", item);
        this.itemContent = "";
      } else {
          alert("nothing add");
      }
    }
  }
};
</script>
