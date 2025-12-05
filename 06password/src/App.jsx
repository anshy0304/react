import { useCallback, useState ,useEffect ,useRef } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [char , setChar] = useState(false)
  const [number,setNumber] = useState(false)
  const [password , setPassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let pass = ""
    if(char) str+=",./;'\:[]{}!@#$%^&*()_+"
    if(number) str +="1234567890"
    for(let i=0;i<length;i++){
      let char  = str[Math.floor(Math.random()*str.length)]
      pass += char
    }
    setPassword(pass)

  },[length,char,number,setPassword])


  const copy = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,100)
      window.navigator.clipboard.writeText(password)
  },[password])
  
  useEffect((() => {
    passwordGenerator()
  }),[length,number,char,passwordGenerator])

  return (
    <>
      
      <div className='w-full max-w-md mx-auto px-4 shadow-md rounded-lg overflow-hidden text-orange-500 bg-gray-700'>
        <h1 className='text-2xl font-bold text-center py-4'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 w-100' >
          <input type="text"
          value={password}
          className='w-full p-4 bg-white text-gray-700'
          placeholder='Password'
          readOnly  
          ref={passwordRef}
          />  
          <button 
          onClick={copy}
          className='w-full p-4 bg-blue-400 text-gray-700 text-white'>Copy</button>
        </div>
        <div className='flex items-center'>
      <input type="range"
      min={8}
      max={100}
      value={length}
      className='cursor-pointer'
      onChange={(e) => {setLength(e.target.value)}}
      />
       <label htmlFor="">Length:{length}</label>
        </div>
          <div className='flex items-center'>
            <input type="checkbox"
            defaultChecked = {number}
            id = "numberInput"
            onChange={(e) => {
              setNumber((prev) => !prev)
            }}
           
            />
            <label htmlFor="numberInput">Number</label>
          </div>
             <div className='flex items-center'>
            <input type="checkbox"
            defaultChecked = {char}
            id = "charInput"
            onChange={(e) => {
              setChar((prev) => !prev)
            }}
           
            />
            <label htmlFor="charInput">char</label>
          </div>
      </div>
    </>
  )
}

export default App
