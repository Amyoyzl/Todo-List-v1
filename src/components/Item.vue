<template>
    <div id="item">
        <input type="checkbox" class="done-todo" v-model="item.isChecked" />
        <span>{{ item.content }}</span>
    </div>
</template>

<script>
export default {
    name: "item",
    props: ['item']
}
</script>
