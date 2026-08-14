import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "./authSlice";


const details=createSlice({
    name:"details",
    initialState:{details:null},
    reducers:{
        emptyIt:(state)=>{
            state.details=null
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(loginUser.pending,(state)=>{
            state.details=null
        })
        .addCase(loginUser.rejected,(state)=>{
            state.details=null
        })
        .addCase(loginUser.fulfilled,(state,action)=>{
            state.details=action.payload
        })
    }
})

export const {emptyIt} = details.actions
export default details.reducer
