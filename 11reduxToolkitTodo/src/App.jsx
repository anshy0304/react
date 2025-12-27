import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Components/Todo'
import AddTodo from './Components/AddTodo'
import { Provider } from 'react-redux'
import store from './app/store'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
      <div className='flex-col border-2 w-100 '>
     <AddTodo />
     <Todo />
     </div>
    </Provider>
  )
}

export default App
