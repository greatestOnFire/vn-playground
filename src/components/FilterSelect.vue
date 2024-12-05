<template>
    <div class="widget__filter">
        <mod-button
            @click.stop="dropdownToggle"
            :btn-type="'primary'"
            name="filter"
            :class="{
                open: isVisible,
            }"
            class="widget__filter__select"
            role="combobox"
            aria-label="Filter by name"
            aria-haspopup="listbox"
            aria-expanded="false"
            aria-controls="widget__filter__dropdown"
        >
            <span class="selected-value">{{ filter }}</span>
            <dropdown-arrow-icon class="filter__icon" />
        </mod-button>
        <ul role="listbox" class="widget__filter__dropdown">
            <li
                v-for="option of filters"
                tabindex="0"
                role="option"
                @keydown.enter="optionSelected(option)"
                @click="optionSelected(option)"
            >
                {{ option }}
            </li>
        </ul>
    </div>
</template>

<script>
import DropdownArrowIcon from '@assets/UI/Icons/DropdownArrowIcon.vue'
import ModButton from '@components/UI/ModButton.vue'

export default {
    components: { ModButton, DropdownArrowIcon },

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
        background-color: #6c63ff;
        color: #fff;
        border-radius: 5px;
        border-color: transparent;
        padding: 5px;
        text-transform: uppercase;
        box-sizing: border-box;
        cursor: pointer;

        .filter__icon {
            transition: all 0.3s ease-in-out;
        }

        &.open {
            background-color: #534cc2;
            border: 2px inset #6c63ff;

            .filter__icon {
                rotate: 180deg;
            }

            + .widget__filter__dropdown {
                visibility: visible;
            }
        }
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
        z-index: 2;

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
