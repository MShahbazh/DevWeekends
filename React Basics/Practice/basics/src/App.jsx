import './index.css'

function App(){
  const username="Hello"
  return(
    <>
    <h1>Heading</h1>
    <p>This is the First Message {username}</p>
    </>
  )
}

function Nested(){
  return (
    <>
      <App/>
      <h1>Nested</h1>
    </>
  )
}


export default App;