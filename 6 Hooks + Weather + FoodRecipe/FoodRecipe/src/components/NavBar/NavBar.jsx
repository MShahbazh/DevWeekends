import { Link, NavLink } from "react-router-dom"
import { context } from "../../Context/Context"
import { useContext } from "react"

export default function NavBar() {
    const {search,setSearch,searched}=useContext(context)    
  return (
    <div className="bg-orange-100 w-full  py-10 flex items-center justify-center gap-5">
        <div className="p-3 flex items-center justify-center flex-1 ">
            <Link to="/" className="font-bold text-2xl text-orange-700">Food Recipe</Link>
        </div>
        <div className=" flex-2 flex items-center justify-between">
            <input onChange={(e)=>{
                setSearch(e.target.value)
            }} placeholder="Enter Text" type="text" className="p-3 w-[90%] outline-none border-s border-t border-b " />
            <Link to="/" onClick={()=>{
                searched()
            }} className="p-3 border bg-orange-700 text-white transform duration-300 hover:scale-105 cursor-pointer">Search</Link>
        </div>
        <div className="flex-1  flex items-center justify-center gap-5">
            <NavLink className={({isActive})=>`p-3 outline-none ${isActive? "text-orange-700":""}`} to="/">Home</NavLink>
            <NavLink className={({isActive})=>`p-3 outline-none ${isActive? "text-orange-700":""}`} to="favourites">Favourites</NavLink>
        </div>
    </div>
  )
}
