import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

function App(props) {
  return (
    <>
      <h1 className='flex flex-col align-center justify-center p-5 rounded-2xl bg-green-600 '>Tailwind Test {props.obj.world}</h1>
    </>
  )
}

export default App 