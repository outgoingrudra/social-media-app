import React from 'react'
import {Routes , Route} from "react-router-dom"
import Home from './pages/Home'
import Login from './pages/Login'
import Logout from './pages/Logout'
import Signup from './pages/Signup'
import BugFinder from "./pages/BugFinder"
export default function App() {
  return (
    <div>
      <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/login' element={<Login/>}/>
           <Route path='/logout' element={<Logout/>}/>
           <Route path='/signup' element={<Signup/>}/>
           <Route path='/bug' element={<BugFinder/>}/>
      </Routes>
    </div>
  )
}
