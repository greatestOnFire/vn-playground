<template>
    <section class="todos">
        <template v-if="todos.length">
            <todo-item
                v-for="todoItem of todos"
                :todo="todoItem"
                :key="todoItem.id"
                @remove="removeTodo"
            />
        </template>
        <template v-else>
            <article class="todos__empty">
                <empty-image />
                <p>Empty...</p>
            </article>
        </template>
    </section>
</template>

<script>
import TodoItem from '@components/todos/TodoItem.vue'
import EmptyImage from '@assets/images/EmptyImage.vue'

export default {
    components: { EmptyImage, TodoItem },
    props: {
        todos: {
            type: Array,
            required: true,
            default: () => [],
        },
    },

    emits: ['removeTodo'],

    methods: {
        removeTodo(todo) {
            this.$emit('removeTodo', todo)
        },
    },
}
</script>

<style lang="scss" scoped>
.todos {
    display: grid;
    justify-content: center;
    grid-template-columns: 70%;
    padding: 10px 0;
    font-family: 'Kanit', sans-serif;
    text-transform: uppercase;

    @media screen and (max-width: 760px) {
        grid-template-columns: 1fr;
    }

    &__empty {
        display: grid;
        justify-content: center;
        text-align: center;

        p {
            font-size: 20px;
            font-weight: 400;
        }
    }
}
</style>
