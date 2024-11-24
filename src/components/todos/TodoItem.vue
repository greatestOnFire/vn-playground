<template>
    <article class="todos__item">
        <input type="checkbox" v-model="todo.completed" />
        <p>{{ todo.title }}</p>
    </article>
</template>

<script>
export default {
    props: {
        todo: {
            type: Object,
            required: true,
        },
    },
}
</script>

<style lang="scss" scoped></style>
