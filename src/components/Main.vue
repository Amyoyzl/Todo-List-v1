<template>
  <div id="main">
      请输入姓名：
    <input type="text" v-model="userName" />
    <br />
    <br />
    <br />
    <button class="btn" @click="toHome">开始使用</button>
  </div>
</template>

<script>
export default {
  name: "Main",
  data() {
      return {
          userName: ''
      }
  },
  methods: {
      toHome() {
          this.$store.commit('setUser', this.userName);
          this.$router.push("/home");
      }
  }
};
</script>