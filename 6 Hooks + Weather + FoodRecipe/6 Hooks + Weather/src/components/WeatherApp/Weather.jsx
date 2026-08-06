import { useState } from "react"

export default function Weather(){
    const [search,setSearch]=useState('')
    const [loading,setLoading]=useState(false)
    const [data,setData]=useState(null) 

    
    async function fetchData(value){
        try {
            const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=b600333ea1229f37f43891662c642229`)
            const dat=await response.json()
            if(Object.hasOwn(dat,'message')){                
                let string="";
                let i=0
                while(i<dat.message.length){
                    if(i==0){
                        string+=dat.message[0].toUpperCase()
                    }
                    else if(dat.message[i]==' '){
                        string+=' '+dat.message[i+1].toUpperCase()
                        i+=1;
                    }
                    else{
                        string+=dat.message[i]
                    }
                    i+=1;
                }
                dat.message=string
            }
            setData(dat)

        } catch (e) {
            console.log(e);
        }
    }

    return(
        <div className="w-full flex items-center justify-center  mt-5 ">
            <div className="w-[60%] bg-purple-200 p-8 flex items-center justify-center flex-col">
                <div className="w-full flex items-center justify-center text-3xl p-5 border-b border-b-black/40 font-bold">
                    <h1>Weather App</h1>
                </div>
                <div className="flex items-center w-full py-8  border-b border-b-black/40">
                    <input onChange={(e)=>{setSearch(e.target.value)}} type="text" placeholder="Enter City Name" className="w-[80%] outline-none border-t border-s border-b border-black p-2"/>
                    <h1 onClick={()=>{
                        if(!search){
                            setLoading(false)
                            setData(null)
                            return
                        }
                        else{
                            setLoading(true)
                            fetchData(search)
                        }
                    }} className="w-[20%] bg-blue-200 font-bold p-2 border border-black flex items-center justify-center cursor-pointer ">Search</h1>
                </div>
                {
                    data?
                        data.cod!=200?
                        <div className="flex items-start justify-center p-10 flex-col gap-5 text-3xl font-bold">
                            <h1 className='text-red-800'>{data.message}</h1>
                        </div>
                        :
                        <>
                        <div className="mt-5 mb-5 text-3xl font-bold flex items-center justify-center text-purple-900">
                                <h1>{data.name}</h1>
                            </div>
                        <div className=" w-full">
                            <div className="flex items-center justify-center flex-col py-3">
                                <div className="text-sm w-full text-black/70 flex items-center justify-center gap-3">
                                    <div className=" border-t  flex-1"></div>
                                    <h1 className="flex-0">Location</h1>
                                    <div className=" border-t flex-1"></div>
                                </div>
                                <div className="text-md mt-3 flex items-center justify-start w-full">
                                    <h1><span className="font-bold">Country:</span> {data.sys.country}</h1>
                                </div>
                                <div className="flex text-md mt-3 items-center justify-between w-full">
                                    <h1><span className="font-bold">Latitude:</span> {data.coord.lat}</h1>
                                    <h1><span className="font-bold">Longitude:</span> {data.coord.lon}</h1>
                                </div>
                            </div>

                            <div className="flex items-center justify-center flex-col  py-3">
                                <div className="text-sm w-full text-black/70 flex items-center justify-center gap-3">
                                    <div className=" border-t  flex-1"></div>
                                    <h1 className="flex-0">Weather</h1>
                                    <div className=" border-t flex-1"></div>
                                </div>
                                <div className="text-md mt-3 flex items-start justify-start w-full flex-col">
                                    <h1><span className="font-bold">Main:</span> {data.weather[0].main}</h1>
                                    <h1><span className="font-bold">Description:</span> {data.weather[0].description}</h1>
                                </div>
                            </div>

                            <div className="flex items-center justify-center flex-col  py-3">
                                <div className="text-sm w-full text-black/70 flex items-center justify-center gap-3">
                                    <div className=" border-t  flex-1"></div>
                                    <h1 className="flex-0">Temperature</h1>
                                    <div className=" border-t flex-1"></div>
                                </div>
                                <div className="text-md mt-3 flex items-start justify-start w-full flex-col">
                                    <h1><span className="font-bold">Current Temperature:</span> {(data.main.temp).toFixed(2)}K / {(data.main.temp-273.15).toFixed(2)}C</h1>
                                    <h1><span className="font-bold">Feels Like:</span> {(data.main.feels_like).toFixed(2)}K / {(data.main.feels_like-273.15).toFixed(2)}C</h1>
                                </div>
                                <div className="flex text-md mt-3 items-center justify-between w-full">
                                    <h1><span className="font-bold">Min:</span> {(data.main.temp_max).toFixed(2)}K / {(data.main.temp_max-273.15).toFixed(2)}C</h1>
                                    <h1><span className="font-bold">Max:</span> {(data.main.temp_min).toFixed(2)}K / {(data.main.temp_min-273.15).toFixed(2)}C</h1>
                                </div>
                            </div>

                            <div className="flex items-center justify-center flex-col  py-3">
                                <div className="text-sm w-full text-black/70 flex items-center justify-center gap-3">
                                    <div className=" border-t  flex-1"></div>
                                    <h1 className="flex-0">Atmosphere</h1>
                                    <div className=" border-t flex-1"></div>
                                </div>
                                <div className="text-md mt-3 flex items-start justify-start w-full flex-col">
                                    <h1><span className="font-bold">Pressure:</span> {data.main.pressure}hPa</h1>
                                    <h1><span className="font-bold">Humidity:</span> {data.main.humidity}</h1>
                                </div>
                                <div className="flex text-md mt-3 items-center justify-between w-full">
                                    <h1><span className="font-bold">Sea Level:</span> {data.main.sea_level}</h1>
                                    <h1><span className="font-bold">Ground Level:</span> {data.main.grnd_level}</h1>
                                </div>
                            </div>

                            <div className="flex items-center justify-center flex-col  py-3">
                                <div className="text-sm w-full text-black/70 flex items-center justify-center gap-3">
                                    <div className=" border-t  flex-1"></div>
                                    <h1 className="flex-0">Wind</h1>
                                    <div className=" border-t flex-1"></div>
                                </div>
                                <div className="text-md mt-3 flex items-start justify-start w-full flex-col">
                                    <h1><span className="font-bold">Speed:</span> {data.wind.speed}m/s</h1>
                                    <h1><span className="font-bold">Direction:</span> {data.wind.deg}</h1>
                                    <h1><span className="font-bold">Gust:</span> {data.wind.gust}</h1>
                                </div>
                            </div>

                            <div className="flex items-center justify-center flex-col  py-3">
                                <div className="text-sm w-full text-black/70 flex items-center justify-center gap-3">
                                    <div className=" border-t  flex-1"></div>
                                    <h1 className="flex-0">Sky and Visibility</h1>
                                    <div className=" border-t flex-1"></div>
                                </div>
                                <div className="text-md mt-3 flex items-start justify-start w-full flex-col">
                                    <h1><span className="font-bold">Cloud Cover:</span> {data.clouds.all}%</h1>
                                    <h1><span className="font-bold">Visibility:</span> {data.visibility}</h1>
                                </div>
                            </div>
                         
                            <div className="flex items-center justify-center flex-col  py-3">
                                <div className="text-sm w-full text-black/70 flex items-center justify-center gap-3">
                                    <div className=" border-t  flex-1"></div>
                                    <h1 className="flex-0">Sun Times</h1>
                                    <div className=" border-t flex-1"></div>
                                </div>
                                <div className="text-md mt-3 flex items-start justify-start w-full flex-col">
                                    <h1><span className="font-bold">Sunrise:</span> {new Date(data.sys.sunrise*1000).toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})}</h1>
                                    <h1><span className="font-bold">Sunset:</span> {new Date(data.sys.sunset*1000).toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})}</h1>
                                </div>
                            </div>


                        </div>

                        </>
                    :
                    
                        loading?
                        <div className="py-10 text-3xl font-bold">
                            <h1>Loading...</h1>
                        </div>
                        :
                        <div className="py-10 text-3xl font-bold">
                            <h1>Search Something...</h1>
                        </div>
                }
            </div>
        </div>
    )
}