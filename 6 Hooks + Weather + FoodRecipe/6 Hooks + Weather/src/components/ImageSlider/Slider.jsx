import { useState,useEffect } from "react"
import {slider} from "../data"

export default function Slider(){
    const [id,setId]=useState(1)
    

    function set(x){
        if(x) {if(id-1>=1) setId(id-1)}
        else {if(id+1<=slider.length) setId(id+1)}
    }

    useEffect(()=>{
        const timer=setInterval(()=>{
            if(id==slider.length) setId(1)
            else set(false)
        },2000)
        return ()=>clearInterval(timer)
    },[set,id])
 
    return(
        <div className="w-full p-16 flex flex-items justify-center items-center">
            <div className="relative flex flex-col items-center justify-centeR">
                <div className="w-[800px]  h-[400px]">
                    <img src={slider[id-1].image} alt="" />
                </div>
                <div className=" absolute top-40 w-full flex justify-between items-center">
                    <div onClick={()=>{
                        set(true)
                    }} className="bg-cyan-800 hover:bg-cyan-600 cursor-pointer text-white w-15 h-15 text-3xl pb-1 rounded-full flex items-center justify-center">
                        &larr;
                    </div>
                    <div onClick={()=>{
                        set(false)
                    }} className="bg-cyan-800 hover:bg-cyan-600    cursor-pointer text-white w-15 h-15 text-3xl pb-1 rounded-full flex items-center justify-center">
                        &rarr;
                    </div>
                </div>
                <div className="absolute top-92 flex items-center justify-center gap-5">
                    {
                        slider.map((element)=>{
                            return(
                                <div key={element.key} className={`w-7 h-7 rounded-full ${id==element.key? "bg-cyan-800":"bg-white"}`}> 
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}