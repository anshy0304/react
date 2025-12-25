import { useState,useEffect } from 'react'

import './App.css'
import { TodoProvider } from './Contexts'
import Todoform from './Components/Todoform'
import Todoitem from './Components/Todoitem'

function App() {
  const [Todos,setTodos] = useState([])
  const addTodo = (todo) => {
    setTodos((prev) => [...prev,{id:Date.now(),...todo}])
  }
  const updateTodo = (id,todo) => {
    setTodos((prev) => prev.map((prevTodo) => ((prevTodo.id == id) ? todo:prevTodo)))
  } 
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => (prevTodo.id !== id)))
  }
  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id)? {...prevTodo,completed:!prevTodo.completed}: prevTodo))
  }

  useEffect(() => {
    const Todos = JSON.parse(localStorage.getItem("Todos"))
    if(Todos && Todos.length > 0) {
      setTodos(Todos)
    }
  }, [])
  useEffect(() => {
    localStorage.setItem("Todos",JSON.stringify(Todos))
  }, [Todos])
    
  return (
    <TodoProvider value={{addTodo,updateTodo,toggleComplete,deleteTodo,Todos}}>
     <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {<Todoform />} 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {Todos.map((todo) => (
                          <div key = {todo.id}
                          className='w-full'
                          >
                            <Todoitem key={todo.id} todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
