import {useSelector, createSlice, nanoid , useDispatch} from "@reduxjs/toolkit";

const initialState={
    todos:[{id:1,text:"Hello World"}]
}

export const todoSlice=createSlice({
    name:'todo',
    initialState:initialState,
    reducers:{
        addtodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload.text
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{},
    }
})

const dispatch=useDispatch()

const addTodoHandler=(e)=>{
    e.preventDefault()
    dispatch(addTodo(input))
}

function Todos(){
    const todos=useSelector(state=>state.todos)
    const Dispatch=useDispatch()
}

