<template>
    <form method="dialog" @click.stop>
        <header><slot name="header"></slot></header>
        <div class="note-dialog__content">
            <u-i-input
                type="text"
                :value="note"
                @input="handleInput($event.target.value)"
                placeholder="Input your note..."
            />
        </div>

        <footer>
            <menu><slot name="menu"></slot></menu>
        </footer>
    </form>
</template>

<script>
import UIInput from '@components/UI/UIInput.vue'

export default {
    components: { UIInput },

    props: {
        note: {
            type: String,
        },
    },

    emits: ['update:note'],

    methods: {
        handleInput(text) {
            this.$emit('update:note', text)
        },
    },
}
</script>

<style lang="scss" scoped>
form {
    display: grid;
    grid-template-rows: 1fr 2fr 1fr;
    gap: 16px;
    padding: 18px 30px;
    box-sizing: border-box;
    width: 500px;
    height: 290px;
    background-color: var(--background-color);
    color: var(--text-color);
    border-radius: 16px;
    border: 1px solid var(--text-color);

    @media screen and (max-width: 760px) {
        width: 100%;
    }

    & header {
        font-family: 'Kanit', sans-serif;
        font-size: 26px;
        font-weight: 500;
        text-transform: uppercase;
        text-align: center;
        height: max-content;
    }

    & .note-dialog__content {
        display: grid;
        align-content: baseline;

        input {
            width: 100%;
        }
    }

    & footer {
        & menu {
            display: flex;
            justify-content: space-between;
            padding: 0;
            margin: 0;
        }
    }
}
</style>
