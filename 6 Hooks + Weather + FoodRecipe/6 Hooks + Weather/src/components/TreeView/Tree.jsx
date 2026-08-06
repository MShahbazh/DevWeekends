import { useState } from "react";
import { tree } from "../data"

function Tree({values}){
    const [clicked,setClicked]=useState(false)
    let isThere=values.children.length==0

    return(

        <div className={`text-white w-full p-2 ${clicked?"bg-cyan-700":""}`}>
            <div className=" flex  items-center justify-between h-10">
                <h1 className={`h-full w-[50%]  flex items-center justify-start text-md ${clicked?"font-bold text-teal-100":""}`}>{values.name}</h1>
                <h1 onClick={()=>{
                    setClicked(!clicked)
                }} className={`cursor-pointer text-2xl ${isThere? "hidden":""}`}>
                    {clicked?"-":"+"}
                </h1>
            </div>
        {
            clicked&&
            values.children.map((element)=>{
                return(
                    <div key={element.key} className="ml-15 border-s flex item-center justify-center">
                        <Tree  values={element}/>
                    </div>
                )
            })
        }
        </div>
    )
}

function TreeNav(){
    return (
        <div className="bg-cyan-800 w-[50%] min-h-screen py-16 flex items-center justify-start flex-col ">
            {
                tree.map((element)=>{
                    return(
                        <Tree key={element.key} values={element}/>
                    )
                })
            }
        </div>
    )
}

export default TreeNav