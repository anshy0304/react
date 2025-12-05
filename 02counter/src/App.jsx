import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
let [counter,setCounter] = useState(15);
      const addValue = function()  {
        if(counter < 20) setCounter(counter +1)
      }
      const removeValue = function(){
        if(counter > 0) setCounter(counter - 1)
      }

  return (
    <>
      
      
      <h1>Counter {counter}</h1>
      <button 
      onClick={addValue}
      >Add Value {counter}</button> <br /><br />
      <button
      onClick={removeValue}
      >Remove Value {counter}</button>
    </>
  )
}

export default App
