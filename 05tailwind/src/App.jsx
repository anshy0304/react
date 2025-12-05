import { useState } from 'react'
import './App.css'
import Card from './components/card'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="bg-blue-500 p-4 text-white w-md">
        Tailwind is working!
      </h1>
      <Card username="ansh" />
      
    </>
  )
}

export default App
