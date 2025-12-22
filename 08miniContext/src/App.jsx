
import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Profile from './Component/Profile'
import Login from './Component/Login'
function App() {
  

  return (
    <>
      <UserContextProvider>
          <Login />
          <Profile />
      </UserContextProvider>
    </>
  )
}

export default App
