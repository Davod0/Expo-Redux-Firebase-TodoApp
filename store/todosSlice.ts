import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { mockedTodos, Todo } from "../data";



const todosSlice = createSlice({
    name: "todos",
    initialState: mockedTodos,
    reducers: {
        addTodo(state, action: PayloadAction<Todo>) {
            state.push(action.payload)
        },
        toggleCompleteTodo(state, action: PayloadAction<number>) {
            const todo = state.find(todo => todo.id === action.payload)
            if (todo) {
                todo.completed = !todo.completed;
            }
        }
    }
})

export const todosReducer = todosSlice.reducer;
export const { addTodo, toggleCompleteTodo } = todosSlice.actions;