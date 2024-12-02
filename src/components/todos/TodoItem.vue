<template>
    <article class="todos__item">
        <input type="checkbox" v-model="todo.completed" />
        <p>{{ todo.title }}</p>
        <div class="item__btn-group">
            <mod-button class="item__btn">
                <edit-icon />
            </mod-button>
            <mod-button class="item__btn" @click="$emit('remove', todo.id)">
                <trash-icon />
            </mod-button>
        </div>
    </article>
</template>

<script>
import ModButton from '@components/UI/ModButton.vue'
import EditIcon from '@assets/UI/Icons/EditIcon.vue'
import TrashIcon from '@assets/UI/Icons/TrashIcon.vue'

export default {
    components: { TrashIcon, EditIcon, ModButton },
    props: {
        todo: {
            type: Object,
            required: true,
            id: {
                type: [String, Number],
            },
            title: {
                type: String,
            },
            completed: {
                type: Boolean,
            },
        },
    },

    emits: ['remove'],
}
</script>

<style lang="scss" scoped>
.todos__item {
    font-size: 20px;
    font-weight: 500;
    color: var(--text-color);
    display: grid;
    align-items: center;
    grid-template-columns: auto 4fr 1fr;
    gap: 16px;
    border-bottom: 1px solid #6c63ff;

    &:last-of-type {
        border-bottom: none;
    }

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
                opacity: 0.5;
            }
        }
    }

    .item__btn-group {
        display: grid;
        grid-template-columns: repeat(2, max-content);
        gap: 8px;
        justify-content: flex-end;

        .item__btn {
            background-color: transparent;
            border: none;
            padding: 0;
            cursor: pointer;
        }
    }
}
</style>
