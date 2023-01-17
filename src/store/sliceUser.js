import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todoSlice',
    initialState: {
        tasks: [],
    },
    reducers: {
        addTodo(state, action){
            state.tasks.push(action.payload);
        },
        taskToggleComplited(state, action){
            const toggledItem = state.tasks.find(task => task.taskId === action.payload.id);
            toggledItem.isComplited = !toggledItem.isComplited;
        },
        removeTask(state, action){
            state.tasks = state.tasks.filter(task => task.taskId !== action.payload.id)
        },
    }
})

export const {addTodo, taskToggleComplited, removeTask}  = todoSlice.actions;
export default todoSlice.reducer;
