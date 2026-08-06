import { useContext } from "react"
import { context } from "../../Context/Context"
import { Link } from "react-router-dom"

function Card({values}){
    return(
        <div className="w-60  overflow-hidden bg-orange-100 flex flex-col gap-2 border-2 border-black rounded-[10px] hover:scale-105 transform duration-300 pb-2">
            <div className=" w-60 border-b">
                <img src={values.image_url} className="w-full h-auto block" alt="" />
            </div>
            <div className=" h-14 font-bold py-2 text-md w-full flex items-center justify-start px-3">
                <h1>{values.title}</h1>
            </div>
            <div className=" text-md w-full flex items-center justify-center px-3 mt-auto">
                <Link to={`details/${values.id}`} className="py-2 px-3 cursor-pointer text-white bg-orange-700">View Recipe</Link>
            </div>
        </div>
    )
}

export default function Home() {
    const {searchedData}=useContext(context)
  return (
    <>
        {searchedData?
            searchedData.length<=0?
             <div className="w-full font-bold text-3xl flex items-center justify-center p-20">
                <h1>No Results Found. Try a valid name</h1>
            </div>
            :
        <div className="grid px-5 py-10 grid-cols-4 gap-y-5">
            {
                searchedData.map((element)=>{
                    return <Card values={element} key={element.id}/>
                })
            }
        </div>
        :
            <div className="w-full font-bold text-3xl flex items-center justify-center p-20">
                <h1>Search Something...</h1>
            </div>
        }
    </>
  )
}
