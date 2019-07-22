<template>
  <div id="app">
    <v-todo-list />
  </div>
</template>

<script>
import TodoList from './components/TodoList'
export default {
  name: 'app',
  components: {
    "v-todo-list": TodoList
  }
}
</script>

<style>
@import url('./css/app.css');
</style>
