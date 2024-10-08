import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { IoAddOutline } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";

export default function Dashboard() {
 const {currentUser}  = useSelector(state => state.user);
 const[toggleNotes , setToggleNotes] = useState(false);
  return ( 
<div className=' p-5 '>
  <div className='flex justify-between'>
    <input type="text"className='border outline-none border-indigo-500' />
  {currentUser.username && <Link to={'/profile'}><p className='rounded-full bg-indigo-500 h-10 w-10  text-2xl text-center cursor-pointer text-white'>{currentUser.username[0]}</p> </Link> }
  </div>
        <div className='flex max-w-9xl mx-auto justify-between mt-10 px-5'>
             
             <div className='text-3xl font-bold items-center'>
                    <h1><span className='text-indigo-500'>Hey,</span>{currentUser.username.slice(0,12)}</h1>
             </div>
             <p onClick={()=>setToggleNotes(!toggleNotes)} className='flex bg-indigo-500  px-3 cursor-pointer items-center   text-center rounded-full text-white'><IoAddOutline />Add Notes</p>  
        </div>
          
        
         {toggleNotes && <form className='max-w-xl mx-auto bg-white p-5  rounded-lg shadow-lg' >
            <div className='flex justify-between'>
              <p className='text-3xl font-bold'>Add Note</p>
              <button  onClick={()=>setToggleNotes(!toggleNotes)}  className='hover:text-red-700 text-xl'><AiOutlineClose/></button>
            </div>
            <div className='flex flex-col gap-3 pt-4'>
                 <input type="text" className='border p-1 rounded-lg outline-none focus:border-indigo-500' id="title" placeholder='title' />
                 <textarea rows={8} className='outline-none border rounded-lg focus:border-indigo-500' id='note' placeholder='note'/>
            </div>
            <div className='flex gap-4 pt-2 '>
              <button className='border px-2 py-1 rounded-md bg-green-200 text-green-700'>Save</button>
              <button className='border px-2 py-1 rounded-md bg-red-200 text-red-700'>Cancel</button>
            </div>
          </form>}
        
</div>

  )
}
 