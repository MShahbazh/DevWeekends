import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


function App() {

  let [counter,setCounter] = useState(15)
  let [a,b]=useState(true)

  const addValue=()=>{
    if(a){
      document.body.style.backgroundColor='yellow'
      b(false)
    }
    setCounter((prev)=>{
      return prev*5
    })
  }
  
  const removeValue=()=>{
    if(!a){
      document.body.style.backgroundColor='white'
      b(true)
    }
    if(counter-1>0){
      setCounter(counter-1)
    }
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
