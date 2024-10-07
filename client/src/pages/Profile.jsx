import React, { useState } from 'react'
import { useSelector } from 'react-redux';

export default function Profile() {
    const { currentUser } = useSelector(state => state.user);
    const [formData , setFormData] = useState({});



    function handleChange(e){
      setFormData({
        ...formData,
        [e.target.id] : e.target.value,
      });
    }
  return (

    <div  className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
      <form className='flex flex-col gap-4'>
        <p className='bg-indigo-500 h-24 w-24 self-center mt-2 text-white rounded-full text-center pt-6 text-3xl'>{currentUser.username[0]}</p>

        <input type="text"
        placeholder='username' 
        id='username'
        defaultValue={currentUser.username}
        className='border p-3 rounded-lg '
        onChange={handleChange}
        />
        <input type="email"
        placeholder='email'
        id='email'
        defaultValue={currentUser.email}
        className='border p-3 rounded-lg '
        onChange={handleChange}
          />
        <input type="text"
        placeholder='password'
        id='password'
        defaultValue={currentUser.password}
        className='border p-3  rounded-lg'
        onChange={handleChange}
         />
         <button  
          className=' bg-gradient-to-r from-pink-500  to-indigo-500 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80'>Update</button>
      </form>

      <div className='flex justify-between mt-5'>
        <span
         
          className='text-red-700 cursor-pointer'
        >
          Delete account
        </span>
        <span  className='text-red-700 cursor-pointer'>
          log out
        </span>
      </div>
     
    </div>
  )
}
