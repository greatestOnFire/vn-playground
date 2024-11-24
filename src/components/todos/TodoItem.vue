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

<style lang="scss" scoped>
.todos__item {
    font-size: 20px;
    font-weight: 500;
    display: grid;
    align-items: center;
    grid-template-columns: auto 1fr;
    gap: 16px;
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

            + p {
                text-decoration: line-through;
                color: rgba(37, 37, 37, 0.5);
            }
        }
    }
}
</style>
