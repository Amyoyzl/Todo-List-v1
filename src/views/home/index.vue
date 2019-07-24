<template>
  <div class="container">
    <div class="row">
      <router-link class="btn btn-secondary btn-sm col-lg-1" to="/">返回</router-link>
      <div class="col-lg-8"></div>
      <h4 class="col-lg-2">姓名：{{ $store.getters.user }}</h4>
    </div>
    <dir class="row mt-5">
      <ul class="col-lg-3 list-group">
        <li class="list-group-item">
          <router-link to="/todoList">TodoList</router-link>
        </li>
        <li class="list-group-item">
          <router-link to="/mine">我的</router-link>
        </li>
      </ul>
      <div class="col-lg-9">
        <router-view></router-view>
      </div>
    </dir>
  </div>
</template>

<script>
export default {
  name: "home",
  beforeRouteLeave (to, from, next) {
    let sure = confirm("确认返回？");
      if (sure == true) {
        next();
      }
  }
};
</script>
