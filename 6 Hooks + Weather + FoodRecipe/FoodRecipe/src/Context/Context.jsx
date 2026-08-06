

import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

const context=createContext()
function ContextProvider({children}){
    const [search,setSearch]=useState('')
    const [searchedData,setSearchedData]=useState(null)
    const [favs,setFavs]=useState(()=>{
        const obj=localStorage.getItem('favs')
        if(!obj){
            localStorage.setItem('favs',JSON.stringify([]))
            return []
        }
        return JSON.parse(obj)
    })
    const apiKey='b75067d7-9228-4f98-b0ff-1ae23eddce35'

    useEffect(()=>{
        localStorage.setItem('favs',JSON.stringify(favs))
    },[favs])
    
    async function searched(){
        if(!search){
            setSearchedData(null)
            return 
        }
        try{
            const response=await fetch(`https://forkify-api.jonas.io/api/v2/recipes?search=${search}&key=${apiKey}`)   
            const data=await response.json()
            if(data.length==0) setSearchedData([])
            else setSearchedData(data.data.recipes)
        } catch (e){
            console.log(e)
        }   
    }
    return(
        <context.Provider value={{search,setSearch,searched,searchedData,favs,setFavs}}>
            {children}
        </context.Provider>
    )
}

export {ContextProvider,context}