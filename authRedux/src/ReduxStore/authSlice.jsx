import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loginUser=createAsyncThunk("auth/loginUser",async ({first="",second=""},thunkAPI)=>{
    try{
        if(first=="" || second==""){
            throw new Error("One Field Empty!")
        }
        const response = await fetch("https://reqres.in/api/users", {
            headers: { "x-api-key": "free_user_3Hv3Q48WLIBokIQMkXCxA2cz7TY" }
        });
        const data = await response.json();
        const data2=data.data.filter((element)=>{
            return element.first_name==first&&element.last_name==second
        })
        if(data2.length==0){
            throw new Error("User does not Exist")
        }
        return data2[0]
    }
    catch(e){
        console.log(e);    
        return thunkAPI.rejectWithValue(e.message);
    }
})


const authSlice=createSlice({
    name:"auth",
    initialState:{user:null, loading:false,error:null},
    reducers:{
        logout:(state)=>{
            state.user=null
            state.loading=false
            state.error=null
        },    
    },
    extraReducers:(builder)=>{
        builder
        .addCase(loginUser.pending,(state)=>{
            state.loading=true
            state.error=null
        })
        .addCase(loginUser.fulfilled,(state,action)=>{
            state.loading=false
            state.user=action.payload
        })
        .addCase(loginUser.rejected,(state,action)=>{
            state.loading=false
            state.error=action.payload
        })
    }
})

export const {logout}=authSlice.actions
export default authSlice.reducer