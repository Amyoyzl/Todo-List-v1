<template>
  <div id="item">
    <a-checkbox
      type="checkbox"
      class="done-todo"
      :checked="item.isChecked"
      @input="check($event.target.checked)"
      :style="{marginRight: '20px'}"
    />
    <span
      :class="{checked: item.isChecked}"
      @dblclick="editable=true"
      :contenteditable="editable"
      :value="item.content"
      @keydown.enter="update($event.target)"
    >{{ item.content }}</span>
    <a-button id="deleteBtn" @click="deleteItem">X</a-button>
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
    update(element) {
      this.editable = false;
      const newItem = Object.assign(this.item);
      newItem.content = element.innerHTML;
      this.$store.dispatch("updateTodo", newItem);
    },
    deleteItem() {
      this.$store.dispatch("deleteTodo", this.item.id);
    },
    check(checked) {
      const newItem = Object.assign(this.item);
      newItem.isChecked = checked;
      this.$store.dispatch("updateTodo", newItem);
    }
  }
};
</script>
