import { useContext } from "react"
import { context } from "../../Context/Context"

function FeatureFlags(){
    const {enabled,setEnabled}=useContext(context)
    return(
        <div>
            <div className=" p-10 w-full bg-pink-900 flex items-center justify-center items-center flex-col gap-10">
                <h1 className="text-white font-bold text-3xl">Feature Flag</h1>
                <div className="flex items-center justify-center gap-5">
                {
                    enabled.map((element)=>{
                        return(
                            <div onClick={()=>
                                setEnabled((prev)=>
                                    prev.map((e)=>
                                        e.name==element.name? {...e,flag:!element.flag}:e
                                    )
                                )
                            } key={element.name} className={`cursor-pointer  text-white font-bold text-lg px-3 py-2  transform ${element.flag?"bg-purple-900 scale-110":"bg-pink-600 scale-100"}`}>
                                {element.name.toUpperCase()}
                            </div>
                        )
                    })
                }
                </div>
            </div>
            {
                enabled.map((element)=>{
                    if(element.flag){
                        return(
                            <div key={element.name}>
                                {element.component}
                            </div>
                        )
                    }
                })
            }
        </div>
    )
}

export default FeatureFlags