<template>
  <div id="item">
    <input type="checkbox" class="done-todo" :checked="item.isChecked" @input="check($event.target.checked)" />
    <span
      :class="{checked: item.isChecked}"
      @dblclick="editable=true"
      :contenteditable="editable"
      ref="info"
      @keydown.enter="update"
    >{{ item.content }}</span>
    <button class="delete-btn" @click="deleteItem">delete</button>
  </div>
</template>

<script>
export default {
  name: "item",
  props: ["item"],
  data() {
    return {
      editable: false
    };
  },
  methods: {
    update() {
      this.editable = false;
      this.item.content = this.$refs.info.innerHTML;
    },
    deleteItem() {
      this.$store.commit("deleteItem", this.item);
    },
    check(checked) {
      const newItem = Object.assign({}, this.item, { isChecked: checked })
      this.$store.commit("updateItem", newItem);
    }
  }
};
</script>
