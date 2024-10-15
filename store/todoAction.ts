import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, doc, setDoc } from "firebase/firestore";
import { Todo, TodoCreate } from "../data";
import { db } from "../firebase";

{/*
// A simple action with payload
{ type: "add_number", payload: 2 }

// action creator
function addNumber(value: number) {
    return { type: "add_number", payload: value }
}

// thunk
function addNumberThunk(value: number) {
    return () => {
        // do some calculations
        // talk with api
        // etc....
        return { type: "add_number", payload: value }
    };
}

*/}

export const addTodo = createAsyncThunk<Todo, TodoCreate>("todos/add-todo", async (todo, thunkAPI) => {

    //create a new document with id client side
    const newDocRef = doc(collection(db, "todos"));

    //prepare data with id
    const todoData: Todo = {
        id: newDocRef.id,
        ...todo,
        completed: false
    }

    //save the data to firestore
    await setDoc(newDocRef, todoData);

    //return data to redux store
    return todoData;
})