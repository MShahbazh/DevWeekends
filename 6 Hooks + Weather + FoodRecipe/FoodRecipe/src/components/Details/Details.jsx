import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { context } from "../../Context/Context"
import { useContext } from "react"

export default function Details(){
    const {id}=useParams()
    const [recipe,setRecipe]=useState(null)
    const {apiKey,favs,setFavs,searchedData}=useContext(context)
    const [inFav, setInFav]=useState(false)

    useEffect(()=>{
        async function getRecipe() {
            try {
                const response=await fetch(`https://forkify-api.jonas.io/api/v2/recipes/${id}?key=${apiKey}`)
                const data=await response.json()
                setRecipe(data.data.recipe)
            } catch (e) {
                console.log(e);
            }
        }
        getRecipe()
    },[id,apiKey])

    if(!recipe){
        return <div className="p-16 text-xl font-bold text-center">Loading Recipe Details...</div>;
    }

    return(
        <div className="w-full grid grid-cols-2 p-16 gap-5">
            <div className="grid-cols-1">            
                <img onClick={()=> console.log(favs)} src={recipe.image_url} alt="" />
            </div>
            <div className="grid-cols-2">
                <h1 className="text-2xl flex bg-orange-700 text-white w-full font-bold p-3 items-center justify-center">{recipe.title}</h1>
                <div onClick={()=>{
                    if(!inFav){
                        const obj=searchedData.find((element)=>element.id==id)
                        if(obj){
                            setFavs([...favs,obj])
                            setInFav(true)
                        }
                    }
                    else{
                        setInFav(false)
                        setFavs(favs.filter((element)=>element.id!=id))
                    }
                }} className="bg-black text-white w-[30%] my-5 px-3 py-2 flex items-center justify-center cursor-pointer font-bold rounded-[5px] hover:scale-105 hover:bg-black/70 duration-300">
                {
                    inFav?
                    <>
                        Remove from Favourites
                    </>
                    :
                    <>
                        Add in Favourites
                    </>
                }</div>
            <div className='flex items-start flex-col justify-center gap-3 mt-1'>
                    {   
                        recipe.ingredients.map((element,i)=>{
                            return(

                                element.description.includes(':')?
                                    <div key={i} className="bg-orange-100 p-3 w-full  flex items-center justify-center font-bold text-xl">
                                            <h1>{element.description}</h1>
                                    </div>
                                    :
                                    <div key={i} className="border-b pb-3 border-orange-700 w-full">
                                            {element.quantity? <h1><span className="font-bold">Quantity:</span> {element.quantity}{element.unit}</h1>:""}
                                            <h1><span className="font-bold">Item:</span> {element.description}</h1>
                                    </div>
                               
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}