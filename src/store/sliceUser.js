import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk(
    'todo/fetchTodos',
    async function (_, { rejectWithValue }) {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');

            if (!response.ok) {
                throw new Error('Sorry it\'s error')
            }
            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const todoDelete = createAsyncThunk(
    'todos/todoDelete',
    async function (id, { rejectWithValue, dispatch }) {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
                method: 'DELETE',
            })

            if (!response.ok) {
                throw new Error('Sorry, I can\t delete it.')
            }

            dispatch(removeTask({ id }))

        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

export const toggleStatus = createAsyncThunk(
    'todos/toggleStatus',
    async function (id, { rejectWithValue, getState, dispatch }) {
        const todo = getState().todo.tasks.filter(task => task.id === id);

        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    completed: !todo.completed,
                })
            })

            dispatch(taskToggleComplited({ id }))
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const addNewTodo = createAsyncThunk(
    'todo/addNewTodo',
    async function (text, { rejectWithValue, dispatch }) {
        const todo = {
            id: Math.floor(Math.random() * 10000),
            title: text,
            completed: false,
        }

        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(todo),
            })

            const data = await response.json();
            console.log(data);
            dispatch(addTodo(data))
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

const todoSlice = createSlice({
    name: 'todoSlice',
    initialState: {
        tasks: [],
        error: null,
        status: null
    },
    reducers: {
        addTodo(state, action) {
            state.tasks.push(action.payload);
        },
        taskToggleComplited(state, action) {
            const toggledItem = state.tasks.find(task => task.id === action.payload.id);
            toggledItem.completed = !toggledItem.completed;
        },
        removeTask(state, action) {
            state.tasks = state.tasks.filter(task => task.id !== action.payload.id)
        },
    },
    extraReducers: {
        [fetchTodos.pending]: (state) => {
            state.status = 'loading';
            state.error = null
        },
        [fetchTodos.fulfilled]: (state, action) => {
            state.status = 'resolved'
            state.tasks = action.payload;
        },
        [fetchTodos.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload;
        },
    }
})

export const { addTodo, taskToggleComplited, removeTask } = todoSlice.actions;
export default todoSlice.reducer;
