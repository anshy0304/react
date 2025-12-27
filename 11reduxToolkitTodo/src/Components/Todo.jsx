import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {removeTodo} from '../Features/Todo/todoSlice'

function Todo() {
    const Todos = useSelector((state) => state.Todos)
    const dispatch = useDispatch()
  return (
    <>
    <div>
        Todos
    </div>
    {
        Todos.map((todo) => (
            
            <li key = {todo.id} className='list-none flex'>
                {todo.text}
                <button
                className='border-2'
                onClick={() => dispatch(removeTodo(todo.id))}
                >X</button>
            </li>
            
        ))
    }
    </>
  )
}

export default Todo