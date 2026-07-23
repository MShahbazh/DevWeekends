import "./index.css"
import {useState} from 'react'
import {createRoot} from 'react-dom/client'

function Main(){
  const [color,SetColor]=useState('white')
  function change(color){
    SetColor(color)
  }
  return (
    <div className="w-full h-screen flex flex-col items-center justify-end p-5" style={{backgroundColor:color}}>
      <div className="flex flex-wrap flex-row gap-5  items-center justify-center  text-white px-5 w-full">
        <button className="px-5 py-3 bg-red-500" onClick={()=>change('red')}>Red</button>
        <button className="px-5 py-3 bg-yellow-500" onClick={()=>change('yellow')}>Yellow</button>
        <button className="px-5 py-3 bg-green-500" onClick={()=>change('green')}>Green</button>
        <button className="px-5 py-3 bg-blue-500" onClick={()=>change('blue')}>Blue</button>
      </div>
    </div>
  )
}

createRoot(document.getElementById("root")).render(
  <Main/>
)