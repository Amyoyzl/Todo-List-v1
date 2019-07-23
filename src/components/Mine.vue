<template>
    <div id="mine">
        <img class="img-thumbnail w-25 h-25" src="../assets/head.jpg" alt="">
        <h4>姓名：{{ $store.getters.user }}</h4>
        <h4>电话：18230483434</h4>
    </div>
</template>

<script>
export default {
    name: 'Mine'
}
</script>
