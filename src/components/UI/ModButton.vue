<template>
    <button :class="btnType" class="mod-button">
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: {
        btnType: {
            type: String,
            default: 'primary',
        },
    },
}
</script>

<style lang="scss" scoped>
.mod-button {
    display: grid;
    cursor: pointer;
    border-radius: 5px;
    border-color: transparent;

    &.primary {
        background-color: var(--primary-color);
        color: #fff;
    }

    &.secondary {
        color: var(--external-primary-color);
        background-color: transparent;
        border-color: var(--external-primary-color);
    }
}
</style>
