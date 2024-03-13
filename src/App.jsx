import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  const [counter, setCounter] = useState(0)
  const IncCounter = ()=>{
    if(counter<20){
      setCounter(counter+1)
    }
    
  }
  const decCounter = ()=>{
    if(counter>0){
      setCounter(counter-1)
    }
    
  }
  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter value :{counter}</h2>
    <button
    onClick={IncCounter}
    >Add Value</button>
    <br/>
    <button
    onClick={decCounter}
    >Dec Value</button>
    </>
  )
}

export default App
