
import { useDispatch, useSelector } from "react-redux"
import {loginUser,logout} from '../../ReduxStore/authSlice'

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login(){
    
    const dispatch=useDispatch();
    const [firstName,setFirstName]=useState("")
    const [secondName,setSecondName]=useState("")
    const navigate=useNavigate()
    const {user,loading,error}=useSelector((state)=>state.auth)

    return(
        <>
            <div className="flex items-center justify-center text-5xl p-16 bg-blue-400 text-white font-bold">
                Authentication
            </div>
            <div className="p-3 italic">
                Example : George Bluth
            </div>
            <div className=" gap-15 flex items-center justify-center flex-col p-16">
                <div className="w-[80%]  gap-2 flex items-start justify-center flex-col ">
                    <label htmlFor="" className="text-xl font-bold">First Name</label>
                    <input value={firstName} onChange={(e)=>setFirstName(e.target.value)} type="text" className="outline-none text-2xl border-b px-5 w-full py-2 focus:bg-blue-100"/>
                </div>
                <div className="w-[80%]  gap-2 flex items-start justify-center flex-col ">
                    <label htmlFor="" className="text-xl font-bold">Last Name</label>
                    <input value={secondName} onChange={(e)=>setSecondName(e.target.value)} type="text" className="outline-none text-2xl border-b px-5 w-full py-2 focus:bg-blue-100"/>
                </div>
                
                {!user&&!loading&&!error?                
                    <div onClick={()=>{
                        dispatch(loginUser({first:firstName,second:secondName}))
                    }} className=" flex items-center justify-center px-10 py-3 bg-purple-700 text-white font-bold cursor-pointer hover:scale-105 duration-300">
                        Login
                    </div>:""                
                }
                {
                    loading?
                     <div className=" flex items-center justify-center px-10 py-3 bg-purple-700 text-white font-bold cursor-pointer hover:scale-105 duration-300">
                        loading...
                    </div>:""
                }
                {
                    error?
                     <div className=" flex flex-col gap-2 items-center justify-center px-10 py-3 text-white font-bold">
                        <h1 className="bg-purple-700 px-3 py-2 ">ERROR: {error}</h1>
                        <h1 onClick={()=>{dispatch(logout())}} className="bg-purple-700 cursor-pointer px-3 py-2  hover:scale-105 duration-300">Retry ?</h1>
                    </div>:""                    
                }
                {
                    user?
                    navigate('/dashboard'):""
                }
            </div>
            
        </>
    )
}