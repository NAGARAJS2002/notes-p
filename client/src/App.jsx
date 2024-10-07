import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import HomePage from './components/HomePage'
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import Dashboard from './components/Dashboard'
import PrivateRouter from './components/privateRouter'
import Profile from './pages/Profile'
export default function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<HomePage/>} />
    <Route path='/register' element={<RegisterPage/>} />
    <Route path='/login' element={<LoginPage/>} />
    <Route  element={<PrivateRouter/>}>
    <Route path='/dashboard' element={<Dashboard/>} />
    <Route path='/profile' element={<Profile/>} />
    </Route>
  </Routes>
  </BrowserRouter>
  )
}
