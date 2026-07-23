import { useState,useCallback,useEffect,useRef } from 'react'
import './index.css'

function App() {
  const [length,setLength]=useState(5)
  const [Num,setNum]=useState(false)
  const [Char,setChar]=useState(false)
  const [password,setPassword]=useState("")
  const passwordreff=useRef(null)

  const copyClick=useCallback(()=>{
    passwordreff.current?.setSelectionRange(0,3)
    passwordreff.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])
  
  const generator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYSabcdefghijklmnopqrstuvwxyz"
    if(Num) str+="0123456789"
    if(Char) str+="!@#$%^&*()_+-`"
    
    for(let i=1;i<length;i++){
      let char=str[Math.floor(Math.random()*str.length+1)]
      pass+=char
    }
    setPassword(pass)
  },[length,Char,setPassword,Num])
  useEffect(()=>{generator()},[length,Char,Num,generator])
  return (
   <>
   <div className='pt-5 w-full flex flex-wrap flex-col gap-5 items-center justify-center'>
      <h1 className='text-4xl font-bold'>Password Manager</h1>
      <input readOnly ref={passwordreff} placeholder='Password' name="" id="" className='py-2 border-none bg-white text-black outline-none px-3' value={password}/>
      <input onChange={(e)=>{setLength(e.target.value)}} type="range" type="range" min={6} max={100} value={length}  /> 
      <label >Length: {length}</label>
      <input type="checkbox" checked={Num} onChange={()=>{setNum((prev)=>!prev)}}/>
      <label>Numbers: {Num}</label>
      <input type="checkbox" checked={Char} onChange={()=>{setChar((prev)=>!prev)}}/>
      <label>Characters: {Char}</label>
      <button onClick={copyClick} className='bg-blue-700 p-4'>Copy</button>
   </div>
   </>
  )
}

export default App
