<template>
    <main class="main">
        <section class="widget">
            <h1>Todo list</h1>
            <div class="widget__container">
                <Search v-model:search="searchValue" />
                <Filter
                    :filters="filters"
                    :filter="filter"
                    v-model:selected="filter"
                />
            </div>
        </section>
        <section class="todos">
            <article v-for="todo in filteredAndSearchedTodos">
                <input
                    type="checkbox"
                    v-model="todo.completed"
                    :key="todo.id"
                />
                <p>{{ todo.title }}</p>
            </article>
        </section>
    </main>
</template>

<script>
import Filter from '@components/Filter.vue'
import Search from '@components/Search.vue'
import search from '@components/Search.vue'

export default {
    components: { Search, Filter },

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
        grid-template-columns: 2fr 100px;
        max-width: 800px;
        gap: 16px;
    }
}
</style>
