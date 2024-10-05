import React from 'react'
import home from "../assets/home (1).png"
import { Link } from 'react-router-dom'
export default function HomePage() {
  return (
    <div className='p-5  bg-gradient-to-t from-indigo-500 via-purple-500 to-pink-500 h-screen font-familys'>

    <h1 className='text-5xl font-bold pb-8 uppercase text-white'>Notes</h1>
     
     <div className=' md:flex justify-between items-center max-w-8xl my-10 mx-auto '>
        <div className='text-center md:text-left text-white  pb-8'>
        <h1 className='text-4xl md:text-7xl font-bold  pb-6'>Write your thoughts down as they come to you.</h1>
        <p className='text-xl font-normal mb-12'>Notes is free note taking application...</p>
       <Link to={'/register'}> <button className='px-8 mx-6 text-white py-2   rounded-md bg-blue-700 hover:bg-blue-900' >Register</button></Link>
       <Link to={'/login'}> <button className='px-8  text-white py-2   rounded-md bg-blue-700 hover:bg-blue-900'>Login</button> </Link>
        </div>
      <img className="md:w-1/2" src={home} alt="" />
       </div>
    
    </div>
    
  )
}
