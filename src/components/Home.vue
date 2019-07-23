<template>
  <div class="container">
    <div class="row">
      <button class="btn btn-secondary btn-sm col-lg-1" @click="toMain">返回</button>
      <div class="col-lg-10"></div>
      <h4 class="col-lg-1">{{ $store.getters.user }}</h4>
    </div>
    <dir class="row mt-5">
      <ul class="col-lg-5 list-group">
        <li class="list-group-item">
          <router-link to="/todoList">TodoList</router-link>
        </li>
        <li class="list-group-item">
          <router-link to="/mine">我的</router-link>
        </li>
      </ul>
      <div class="col-lg-7">
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
