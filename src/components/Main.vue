<template>
  <div class="container">
    <div class="input-group mb-3 w-50">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon3">请输入姓名：</span>
      </div>
      <input type="text" class="form-control" v-model="userName" />
    </div>
    <button class="btn btn-success btn-sm" @click="toHome">开始使用</button>
  </div>
</template>

<script>
export default {
  name: "Main",
  data() {
    return {
      userName: ""
    };
  },
  methods: {
    toHome() {
      this.$store.commit("setUser", this.userName);
      this.$router.push("/home");
    }
  }
};
</script>