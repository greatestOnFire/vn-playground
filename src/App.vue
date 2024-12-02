<template>
    <main class="main">
        <section class="widget">
            <h1>Todo list</h1>
            <div class="widget__container">
                <search-input
                    class="container__search"
                    v-model:search="searchValue"
                />
                <filter-select
                    class="container__filter"
                    :filters="filters"
                    :filter="filter"
                    v-model:selected="filter"
                />
                <div class="widget__theme">
                    <mod-button @click.stop="toggleTheme">
                        <template v-if="theme === 'light'">
                            <moon-icon class="icon" />
                        </template>
                        <template v-else>
                            <sun-icon class="icon" />
                        </template>
                    </mod-button>
                </div>
            </div>
        </section>
        <todos-list
            @remove-todo="removeItem"
            :todos="filteredAndSearchedTodos"
        />

        <mod-button class="create-todo">
            <plus-icon />
        </mod-button>
    </main>
</template>

<script>
import FilterSelect from '@components/FilterSelect.vue'
import SearchInput from '@components/SearchInput.vue'
import TodosList from '@components/todos'
import MoonIcon from '@assets/UI/Icons/MoonIcon.vue'
import ModButton from '@components/UI/ModButton.vue'
import SunIcon from '@assets/UI/Icons/SunIcon.vue'
import PlusIcon from '@assets/UI/Icons/PlusIcon.vue'

export default {
    components: {
        PlusIcon,
        SunIcon,
        ModButton,
        MoonIcon,
        SearchInput,
        FilterSelect,
        TodosList,
    },

    data() {
        return {
            searchValue: '',
            filter: 'all',
            filters: ['all', 'complete', 'incomplete'],
            todos: [
                {
                    id: 1,
                    title: 'Note #1',
                    completed: false,
                },
                {
                    id: 2,
                    title: 'Note #2',
                    completed: true,
                },
                {
                    id: 3,
                    title: 'Note #3',
                    completed: false,
                },
            ],
            theme: 'light',
        }
    },

    methods: {
        removeItem(id) {
            this.todos = this.todos.filter((todo) => todo.id !== id)
        },

        toggleTheme() {
            if (this.theme === 'light') {
                return (this.theme = 'dark')
            }

            return (this.theme = 'light')
        },
    },

    computed: {
        filteredTodos() {
            if (this.filter === 'all') return this.todos

            const status = this.filter === 'complete'

            return [...this.todos].filter((todo) => todo.completed === status)
        },

        filteredAndSearchedTodos() {
            const todos = this.filteredTodos

            return [...todos].filter((todo) =>
                todo.title
                    .toLocaleLowerCase()
                    .includes(this.searchValue.toLocaleLowerCase()),
            )
        },
    },

    watch: {
        theme() {
            document.documentElement.setAttribute('data-theme', this.theme)
        },
    },
}
</script>

<style lang="scss" scoped>
.main {
    display: grid;
    justify-content: center;
    gap: 30px;
    color: var(--text-color);

    .create-todo {
        position: absolute;
        right: 320px;
        bottom: 32px;
        display: grid;
        justify-content: center;
        align-items: center;
        border: none;
        border-radius: 50%;
        padding: 13px;
        box-sizing: border-box;
        background-color: var(--primary-color);

        @media (max-width: 960px) {
            right: 30px;
        }
    }
}

.widget {
    display: grid;
    justify-content: center;

    h1 {
        font-family: 'Kanit', sans-serif;
        font-size: 26px;
        text-transform: uppercase;
        text-align: center;
    }

    &__container {
        display: grid;
        grid-template-columns: 2fr 1fr 1fr;
        grid-template-areas: 'search filter theme';
        max-width: 750px;
        gap: 16px;

        @media (max-width: 760px) {
            grid-template-areas:
                'search search search'
                'filter filter theme';
        }

        .container__search {
            grid-area: search;
        }

        .container__filter {
            grid-area: filter;
        }
    }

    &__theme {
        display: grid;
        grid-area: theme;

        button {
            display: grid;
            justify-content: center;
            padding: 8px;
            background-color: #6c63ff;
            border-radius: 5px;
            cursor: pointer;
            border: none;
            box-sizing: border-box;
        }
    }
}
</style>
