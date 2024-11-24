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

    input {
        width: 100%;
        padding: 8px 16px;
        border: 1px solid rgb(108, 99, 255);
        border-radius: 5px;
        font-size: 16px;
        font-family: 'Inter', serif;
        font-weight: 500;
        color: rgb(195, 193, 230);
        appearance: none;

        &::placeholder {
            color: inherit;
        }

        &:focus,
        &:focus-visible {
            color: rgb(108, 99, 255);
            outline: 1px solid rgba(108, 99, 255, 0.4);
            filter: drop-shadow(1px 1px 3px rgba(108, 99, 255));
        }
    }

    .search-icon {
        position: absolute;
        right: 16px;
        background-color: white;
    }
}
</style>
