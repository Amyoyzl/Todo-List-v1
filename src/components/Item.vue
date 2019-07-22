<template>
  <div id="item">
    <input type="checkbox" class="done-todo" v-model="item.isChecked" />
    <span
      :class="{checked: item.isChecked}"
      @dblclick="editable=true"
      :contenteditable="editable"
      ref="info"
      @keydown="update"
    >{{ item.content }}</span>
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
      if (event.keyCode == 13) {
        this.editable = false;
        this.item.content = this.$refs.info.innerHTML;
      }
    }
  }
};
</script>
