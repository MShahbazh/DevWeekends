import { useDispatch, useSelector } from "react-redux"
import {logout} from '../../ReduxStore/authSlice'
import { emptyIt } from "../../ReduxStore/details";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


export default function Dashboard(){
    const {details}=useSelector((state)=>state.details)
    const navigate=useNavigate()
    
    useEffect(()=>{
        if(!details){
            navigate('/')
        }
    },[navigate,details])

    if(!details) return null
    const dispatch=useDispatch()
    return(
        <div className="flex items-center justify-center flex-col w-full bg-teal-600 gap-5">
            <div className="text-white p-5 font-bold text-4xl flex items-center justify-center flex-col gap-5 ">
                <h1>First Name: {details.first_name}</h1>
                <h1>Last Name: {details.last_name}</h1>
                <h1>Email: {details.email}</h1>
            </div>
             <div onClick={()=>{
                dispatch(logout())
                dispatch(emptyIt())

             }} className=" flex items-center justify-center px-10 py-3 bg-purple-700 text-white font-bold cursor-pointer hover:scale-105 duration-300">
                    Logout
            </div>:""   
        </div>
    )
}