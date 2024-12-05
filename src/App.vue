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
                    <mod-button :btn-type="'primary'" @click.stop="toggleTheme">
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
            @edit-todo="editTodo"
            @remove-todo="removeItem"
            :todos="filteredAndSearchedTodos"
        />

        <mod-button @click="dialogShow" class="create-todo">
            <plus-icon />
        </mod-button>

        <note-dialog
            @click="cancel"
            @cancel="cancel"
            @confirm="confirm"
            class="note-dialog"
            ref="modal"
        >
            <todo-form v-model:note="note">
                <template #header>
                    <header>
                        <template v-if="id"> edit note</template>
                        <template v-else>New Note</template>
                    </header>
                </template>
                <template #menu class="">
                    <mod-button @click="cancel" :btn-type="'secondary'">
                        cancel
                    </mod-button>
                    <mod-button @click="confirm"> apply </mod-button>
                </template>
            </todo-form>
        </note-dialog>
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
import NoteDialog from '@components/UI/NoteDialog.vue'
import TodoForm from '@components/todos/TodoForm.vue'

export default {
    components: {
        TodoForm,
        NoteDialog,
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
            note: '',
            id: '',
            theme: 'light',
        }
    },

    methods: {
        removeItem(id) {
            this.todos = this.todos.filter((todo) => todo.id !== id)
        },

        editTodo(item) {
            this.note = item['title']
            this.id = item.id
            this.dialogShow()
        },

        confirm() {
            this.id ? this.changeTodoTitle() : this.createNote()

            this.clearState()
        },

        cancel() {
            this.clearState()
            this.dialogClose()
        },

        changeTodoTitle() {
            const todo = this.todos.findIndex((item) => item.id === this.id)
            this.todos[todo]['title'] = this.note
        },

        createNote() {
            if (!this.note) {
                return
            }

            const todo = {
                id: new Date().getTime(),
                title: this.note,
                completed: false,
            }

            this.todos.push(todo)
        },

        clearState() {
            this.note = ''
            this.id = ''
        },

        dialogShow() {
            this.$refs.modal.show()
        },

        dialogClose() {
            this.$refs.modal.close()
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
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        padding: 13px;
        box-sizing: border-box;
        //background-color: var(--primary-color);

        @media (max-width: 960px) {
            right: 30px;
        }
    }

    .note-dialog {
        padding: 0;
        background-color: rgba(37, 37, 37, 0.7);
        border-color: transparent;
        margin: 0;
        padding: 0;
        max-width: 100%;
        width: 100%;
        max-height: 100%;
        height: 100%;

        &[open] {
            display: grid;
            justify-content: center;
            align-content: center;
        }

        button {
            padding: 10px 22px;
            text-transform: uppercase;
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
            align-items: center;
            justify-content: center;
            box-sizing: border-box;
        }
    }
}
</style>
