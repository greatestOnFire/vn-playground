<template>
    <section class="todos">
        <todo-item
            class="todos__item"
            v-for="todoItem of todos"
            :todo="todoItem"
            :key="todoItem.id"
        />
    </section>
</template>

<script>
import TodoItem from '@components/todos/TodoItem.vue'

export default {
    components: { TodoItem },
    props: {
        todos: {
            type: Array,
            required: true,
            default: () => [],
        },
    },
}
</script>

<style lang="scss">
.todos {
    display: grid;
    justify-content: center;
    grid-template-columns: 70%;
    padding: 10px 0;
    font-family: 'Kanit', sans-serif;
    text-transform: uppercase;

    &__item {
        font-size: 20px;
        font-weight: 500;
        display: grid;
        align-items: center;
        grid-template-columns: auto 1fr;
        gap: 5px;
        border-bottom: 1px solid #6c63ff;

        input {
            display: grid;
            justify-content: center;
            align-items: center;
            width: 26px;
            height: 26px;
            border: 1px solid #6c63ff;
            border-radius: 2px;
            appearance: none;

            &:before {
                content: '';
                width: 1rem;
                height: 1rem;
                clip-path: polygon(
                    28% 38%,
                    41% 53%,
                    75% 24%,
                    86% 38%,
                    40% 78%,
                    15% 50%
                );
                transform: scale(0);
                background-color: #fff;
            }

            &:checked {
                background-color: #6c63ff;

                &::before {
                    transform: scale(1);
                }
            }
        }
    }
}
</style>
