<template>
    <div class="widget__filter">
        <button
            @click="dropdownToggle"
            name="filter"
            class="widget__filter__select"
            role="combobox"
            aria-label="Filter by name"
            aria-haspopup="listbox"
            aria-expanded="false"
            aria-controls="widget__filter__dropdown"
        >
            <span class="selected-value">{{ filter }}</span>
            <dropdown-arrow-icon />
        </button>
        <ul
            role="listbox"
            :class="{
                open: isVisible,
            }"
            class="widget__filter__dropdown"
        >
            <li
                v-for="option of filters"
                role="option"
                @click="optionSelected(option)"
            >
                {{ option }}
            </li>
        </ul>
    </div>
</template>

<script>
import DropdownArrowIcon from '@assets/UI/Icons/DropdownArrowIcon.vue'

export default {
    components: { DropdownArrowIcon },

    props: {
        filter: {
            type: String,
            required: true,
        },
        filters: {
            type: Array,
            required: true,
            default: () => [],
        },
    },

    emits: ['update:selected'],

    data() {
        return {
            isVisible: false,
        }
    },

    methods: {
        dropdownToggle() {
            this.isVisible = !this.isVisible
        },

        optionSelected(currentFilter) {
            this.$emit('update:selected', currentFilter)

            this.dropdownToggle()
        },
    },
}
</script>

<style lang="scss" scoped>
.widget__filter {
    display: grid;
    position: relative;
    font-family: 'Kanit', sans-serif;
    min-width: 120px;

    &__select {
        display: grid;
        grid-template-columns: repeat(2, auto);
        align-items: center;
        justify-content: space-between;
        gap: 5px;
        font-size: 14px;
        font-weight: 700;
        width: 100%;
        background-color: rgb(88, 80, 221);
        color: #fff;
        border-radius: 5px;
        border-color: transparent;
        padding: 5px;
        text-transform: uppercase;
        box-sizing: border-box;
    }

    &__dropdown {
        width: 100%;
        border-radius: 5px;
        position: absolute;
        top: 100%;
        margin: 0;
        padding: 0;
        background-color: white;
        border: 1px solid #6c63ff;
        visibility: hidden;
        transition: visibility 0.1s ease;

        &.open {
            visibility: visible;
        }

        li {
            list-style: none;
            padding: 5px;
            color: #6c63ff;
            font-size: 14px;
            text-transform: capitalize;
            cursor: pointer;

            &:hover {
                background-color: rgba(108, 99, 255, 0.2);
            }
        }
    }
}
</style>
