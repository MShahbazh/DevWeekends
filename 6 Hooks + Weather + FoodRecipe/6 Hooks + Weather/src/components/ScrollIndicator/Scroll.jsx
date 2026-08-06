import {useState,useEffect, useEffectEvent } from "react";

export default function Scroll({values}){
    const [percent,setPercent]=useState(0)
    const [data,setData]=useState([])

    async function getData(){
        try {
            const response=await fetch(values)
            const data2=await response.json()
            setData(data2)
            
        } catch (e) {       
            console.log(e)
        }
    }

    function handlePercent(val){
        const per=document.body.scrollTop || document.documentElement.scrollTop
        const height=document.documentElement.scrollHeight-document.documentElement.clientHeight
        setPercent(per/height*100)
    }

    useEffect(() => {
        getData()
    })

    useEffect(()=>{
        window.addEventListener('scroll',handlePercent)
        return window.removeEventListener("scroll",()=>{})
    })

    return(
        <>
        <div className="sticky top-0 bg-orange-900 h-3 w-full ">
            <div style={{width:`${percent}%`}} className="bg-orange-600 h-3  ">

            </div>
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen w-full">
            {
                data.products&&data.products.map((element)=>{
                    return(
                        <div key={element.id} className="bg-orange-400 flex item-center justify-start p-3 w-[30%] border-b font-bold text-orange-900">
                            {element.title}
                        </div>
                    )
                })
                
            }
        </div>
        </>
    )
}