<template>
  <div class="container">
    <div class="input-group mb-3 w-50">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon3">请输入姓名：</span>
      </div>
      <input type="text" class="form-control" v-model="userName" />
    </div>
    <router-link class="btn btn-success btn-sm" to="/home">开始使用</router-link>
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
  beforeRouteLeave(to, from, next) {
    this.$store.commit("SET_USER", this.userName);
    next();
  }
};
</script>