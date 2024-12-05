<template>
    <div class="widget__search">
        <u-i-input
            type="'search'"
            :value="search"
            @input="handleSearch($event.target.value)"
            placeholder="Search note..."
        />
        <search-icon class="search-icon" />
    </div>
</template>

<script>
import SearchIcon from '@assets/UI/Icons/SearchIcon.vue'
import UIInput from '@components/UI/UIInput.vue'

export default {
    components: { UIInput, SearchIcon },
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
            // console.log(value)
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
