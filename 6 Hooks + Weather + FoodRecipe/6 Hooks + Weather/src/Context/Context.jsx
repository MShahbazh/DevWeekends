import { createContext, useState } from "react";
import { Accordian, Grid, Scroll, Slider, TreeNav, Weather } from "../components";

const context=createContext(null)

function ContextProvider({children}){
    const [enabled,setEnabled]=useState([
        {
            name:'accordian',
            flag:false,
            component:<Accordian/>
        },
        {
            name:'slider',
            flag:false,
            component:<Slider/>
        },
        {
            name:'scroll',
            flag:false,
            component:<Scroll values={"https://dummyjson.com/products?limit=100"}/>
        },
        {
            name:'grid',
            flag:false,
            component:<Grid/>
        },
        {
            name:'tree',
            flag:false,
            component:<TreeNav/>
        },
        {
            name:'weather',
            flag:true,
            component:<Weather/>
        }
    ])
    return(
        <context.Provider value={{enabled,setEnabled}}>
            {children}
        </context.Provider>
    )
}

export {ContextProvider,context}