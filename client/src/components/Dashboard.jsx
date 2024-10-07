import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Dashboard() {
 const {currentUser}  = useSelector(state => state.user)
  return ( 
<div className=' p-5 '>
  <div className='flex justify-between'>
    <input type="text"className='border outline-none border-indigo-500' />
  {currentUser.username && <Link to={'/profile'}><p className='rounded-full bg-indigo-500 h-10 w-10  text-2xl text-center cursor-pointer text-white'>{currentUser.username[0]}</p> </Link> }
  </div>

</div>

  )
}
 