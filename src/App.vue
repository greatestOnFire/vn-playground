<template>
    <main class="main">
        <section class="widget">
            <h1>Todo list</h1>
            <div class="widget__container">
                <search-input v-model:search="searchValue" />
                <filter-select
                    :filters="filters"
                    :filter="filter"
                    v-model:selected="filter"
                />
            </div>
        </section>
        <todos-list :todos="filteredAndSearchedTodos" />
    </main>
</template>

<script>
import FilterSelect from '@components/FilterSelect.vue'
import SearchInput from '@components/SearchInput.vue'
import TodosList from '@components/todos'

export default {
    components: { SearchInput, FilterSelect, TodosList },

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
                    id: 1,
                    title: 'Note #2',
                    completed: false,
                },
            ],
        }
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
}
</script>

<style lang="scss" scoped>
.main {
    display: grid;
    justify-content: center;
    gap: 30px;
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
        max-width: 800px;
        gap: 16px;
    }
}
</style>
