<template>
    <input />
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
input {
    width: 100%;
    padding: 8px 16px;
    border: 1px solid;
    border-color: var(--external-primary-color);
    border-radius: 5px;
    font-size: 16px;
    font-family: 'Inter', serif;
    font-weight: 500;
    color: var(--external-primary-color);
    box-sizing: border-box;
    background-color: transparent;

    &::placeholder {
        color: inherit;
    }

    &:focus,
    &:focus-visible {
        outline: 1px solid var(--external-primary-color);
    }
}
</style>
