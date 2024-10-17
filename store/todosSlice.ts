import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { mockedTodos, Todo } from "../data";
import { addTodo } from "./todoAction";

const todosSlice = createSlice({
  name: "todos",
  initialState: mockedTodos,
  reducers: {
    addTodoOptimistically(state, action: PayloadAction<Todo>) {
      state.push(action.payload);
    },
    toggleCompleteTodo(state, action: PayloadAction<string>) {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addTodo.fulfilled, (state, action) => {
      state.push(action.payload);
    });
  },
});

export const todosReducer = todosSlice.reducer;
export const { addTodoOptimistically, toggleCompleteTodo } = todosSlice.actions;
