import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './Components/Header/Header.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import User from './Components/User/User.jsx'
import GitHub, { Githubinfoloader } from './Components/Github/Github.jsx'
// const router = createBrowserRouter([
//   {
//     path : "/",
//     element: <Layout />,
//     children: [
//       {
//         path:"",
//         element:<Home />
//       },
//       {
//         path:"about",
//         element:<About />
//       },
//       {
//         path:"contact",
//         element:<Contact />
//       },
//       {
//         path:"user/:userid",
//         element:<User />
//       },
//       {
//         path:"github",
//         element:<GitHub />
//       }
//     ]

//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route
      loader = {Githubinfoloader}
      path='github' element={<GitHub />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
    
  </StrictMode>,
)
