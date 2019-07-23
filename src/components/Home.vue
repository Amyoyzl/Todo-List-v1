<template>
  <div id="home">
    <div>
      <button @click="toMain">返回</button>
      <span id="user">{{ $store.getters.user }}</span>
    </div>
    <dir id="content">
      <ul id="left">
        <li>
          <router-link to="/todoList">TodoList</router-link>
        </li>
        <li>
          <router-link to="/mine">我的</router-link>
        </li>
      </ul>
      <div id="right">
        <router-view></router-view>
      </div>
    </dir>
  </div>
</template>

<script>
export default {
  name: "home",
  methods: {
    toMain() {
      let sure = confirm("确认返回？");
      if (sure == true) {
        this.$router.push("/");
      }
    }
  }
};
</script>
