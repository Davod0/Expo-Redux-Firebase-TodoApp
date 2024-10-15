import { createSlice } from "@reduxjs/toolkit";
import { mockedTodos } from "../data";



const todosSlice = createSlice({
    name: "todos",
    initialState: mockedTodos,
    reducers: {}
})

export const todosReducer = todosSlice.reducer;
export const { } = todosSlice.actions;