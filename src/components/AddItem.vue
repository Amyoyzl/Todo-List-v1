<template>
  <div id="addItem">
    <input class="input-text" type="text" v-model="itemContent" @keydown.enter="add" />
    <div id="button" @click="add">Add</div>
  </div>
</template>

<script>
export default {
  name: "AddItem",
  data() {
    return {
      itemContent: ""
    };
  },
  methods: {
    add() {
      if (this.itemContent.length > 0) {
        let item = {
          isChecked: false,
          content: this.itemContent
        };
        this.$store.dispatch('addTodos', item);
        this.itemContent = "";
      } else {
        alert("nothing add");
      }
    }
  }
};
</script>
