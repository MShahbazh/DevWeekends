import { useState,useRef,useEffect } from 'react'
import { accordian } from '../data'

function Bar({value,vars}){
    let isOpen=vars.opened.find(element => element.key==value.key)
    const [height,setHeight]=useState(0)
    const reference=useRef(null)

    useEffect(()=>{
        if(isOpen) setHeight(reference.current.scrollHeight)
        else setHeight(0)
    },[isOpen])

    return(
        <div className='flex items-center justify-center w-full flex-col '>
        <div className='flex w-[50%] items-center justify-center font-bold text-amber-800 bg-amber-300'>
            <div className={`w-[10%] p-5 border-amber-800 border-t border-s border-e flex items-center justify-center ${height!=0?"":"border"}`}>
                {value.key}
            </div>
            <div className={`w-[80%] py-5 px-3 flex items-start border-amber-800 border-t ${height!=0?"":"border"} justify-start`}>
                {value.title}
            </div>
            <div onClick={()=>{
                let open=[]
                if(vars.multi) open=[...vars.opened]
                if(!isOpen){
                    open.push(value)
                    setHeight(reference.current.scrollHeight)
                }
                else{
                    open=open.filter(element=>element.key!=value.key) 
                    setHeight(0)  
                }
                vars.setOpened(open)
            }} className={`w-[10%] cursor-pointer p-5 flex items-center justify-center border-amber-800 border-t border-s border-e   ${height!=0?"":"border"}`}>
                {isOpen?"-":"+"}
            </div>
        </div>
                
                <div ref={reference} style={{height:height}} className={`${height==0?"":"border"} transition-height duration-200 overflow-hidden  w-[50%] items-center justify-start font-bold text-amber-800 bg-amber-300 border-amber-800  `}>
                    <div className='px-5 py-5'>
                        {value.subject }
                    </div>
                </div>
        
        </div>
    )
}

export default function Accordian(){
    const [multi,setMulti]=useState(false)
    const [opened,setOpened]=useState([])

    return(
        <>
        <div className='w-full pt-2 flex items-center justify-center'>
            <div onClick={()=>{
                setMulti(!multi)
            }} className={` text-amber-800 p-4 cursor-pointer font-bold border border-amber-800 ${multi? "bg-amber-500":"bg-amber-300 scale-95"}`}>
                Multi Selection
            </div>
        </div>
        <div className='w-full p-2 flex flex-col items-center justify-center gap-5 '>
            {
                accordian.map((element)=>{
                    return(
                        <Bar key={element.key} value={element} vars={{opened:opened,setOpened:setOpened,multi:multi}}/>
                    )
                })
            }
        </div>
        </>
    )
}