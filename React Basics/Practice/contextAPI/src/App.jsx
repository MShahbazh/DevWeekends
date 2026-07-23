import { useState } from 'react'
import { useContext } from 'react'
import Context1 from '../Context/Context'

function Main2(){
  const {user,age}=useContext(Context1)
  return (
    <h1>User is {user} and {age}</h1>
  )
}

function Main(){
  return (
    <Main2/>
  )
}


function App() {
  const [count, setCount] = useState(0)
  const user="Joe"
  const age=25
 return (
  <Context1.Provider value={{user,age}}>
    <Main/>
  </Context1.Provider>
 )
}

export default App
