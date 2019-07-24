<template>
  <div>
    <a-layout>
      <a-layout-header class="header">
        <a-menu theme="dark" mode="horizontal" :style="{ lineHeight: '64px' }">
          <a-menu-item>
            <router-link to="/">返回</router-link>
          </a-menu-item>
          <a-menu-item style="float:right">
            <a-avatar icon="user" style="margin-right:10px" />
            <span>{{ $store.getters.user }}</span>
          </a-menu-item>
        </a-menu>
      </a-layout-header>
    </a-layout>
    <a-layout style="height: 100vh">
      <a-layout-sider width="300" style="background: black">
        <a-menu mode="inline">
          <a-menu-item>
            <router-link to="/todoList">TodoList</router-link>
          </a-menu-item>
          <a-menu-item>
            <router-link to="/mine">我的</router-link>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout-content style="padding: 30px">
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "home",
  beforeRouteLeave(to, from, next) {
    let sure = confirm("确认返回？");
    if (sure == true) {
      next();
    }
  }
};
</script>
