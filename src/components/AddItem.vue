<template>
  <div>
    <a-input-search placeholder="input todo content" v-model="itemContent" @keydown.enter="add" size="large">
      <a-button  @click="add" slot="enterButton">Add</a-button>
    </a-input-search>
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
        this.$store.dispatch("addTodo", item);
        this.itemContent = "";
      } else {
        alert("nothing add");
      }
    }
  }
};
</script>
