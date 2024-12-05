<template>
    <dialog
        @close="close"
        ref="dialog"
        @keydown.esc="$emit('cancel')"
        @keydown.enter="$emit('confirm')"
    >
        <slot></slot>
    </dialog>
</template>

<script>
export default {
    expose: ['show', 'close'],

    emits: ['cancel', 'confirm'],

    methods: {
        show() {
            this.$refs.dialog.showModal()
        },

        close() {
            this.$refs.dialog.close()
        },
    },
}
</script>
