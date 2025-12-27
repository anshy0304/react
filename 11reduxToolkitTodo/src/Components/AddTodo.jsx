import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../Features/Todo/todoSlice'
 function AddTodo() {
    const [input , setInput] = useState('')
    const dispatch = useDispatch( )
    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }

  return (
    <>
    <form onSubmit={addTodoHandler}>
    <input 
    value={input}
    className='border-2'
    onChange={(e) => setInput(e.target.value)}
    type="text" />
    <button className='border-2'
    type='submit'
    >Add</button>
    </form>
    </>
    
  )
}

export default AddTodo