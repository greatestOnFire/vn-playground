<template>
    <div class="widget__search">
        <input
            type="search"
            :value="search"
            @input="handleSearch($event.target.value)"
            placeholder="Search note..."
        />
        <search-icon class="search-icon" />
    </div>
</template>

<script>
import SearchIcon from '@assets/UI/Icons/SearchIcon.vue'

export default {
    components: { SearchIcon },
    props: {
        search: {
            type: String,
            required: true,
            default: '',
        },
    },

    emits: ['update:search'],

    methods: {
        handleSearch(value) {
            this.$emit('update:search', value)
        },
    },
}
</script>

<style lang="scss" scoped>
.widget__search {
    display: grid;
    align-items: center;
    min-width: 595px;
    width: 100%;
    position: relative;

    @media screen and (max-width: 760px) {
        min-width: 100%;
    }

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

    &:focus {
        filter: drop-shadow(1px 1px 3px var(--external-primary-color));
    }

    .search-icon {
        position: absolute;
        right: 16px;
        fill: var(--external-primary-color);
    }
}
</style>
