<template>
  <div align="middle">
    <a-row type="flex" justify="center" align="middle">
      <a-col :span="4">
        <img id="head" src="@/assets/head.jpg"/>
        <a-input-search placeholder="请输入姓名" v-model="userName" size="large">
          <a-button slot="enterButton">
            <router-link to="/home">开始使用</router-link>
          </a-button>
        </a-input-search>
      </a-col>
    </a-row>
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