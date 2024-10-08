import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateUserFailure,
    updateUserStart, 
    updateUserSuccess,
    deleteUserFailure,
    deleteUserStart,
    deleteUserSuccess,
    signOutUserFailure,
    signOutUserStart,
    signOutUserSuccess

   } from '../redux/user/userSlice';

export default function Profile() {
    const { currentUser ,loading ,error} = useSelector(state => state.user);
    const [formData , setFormData] = useState({});
    const [updateSuccess ,  setUpdateSuccess] = useState(false);

  const dispatch = useDispatch()



    function handleChange(e){
      setFormData({
        ...formData,
        [e.target.id] : e.target.value,
      });
    }


    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        dispatch(updateUserStart());
        const res = await fetch(`/api/user/update/${currentUser._id}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        const data = await res.json();
        if (data.success === false) {
          dispatch(updateUserFailure(data.message));
          return;
        }
  
        dispatch(updateUserSuccess(data));
        setUpdateSuccess(true);
      } catch (error) {
        dispatch(updateUserFailure(error.message));
      }
    };
  
    const handleDeleteUser = async () => {
      try {
        dispatch(deleteUserStart());
        const res = await fetch(`/api/user/delete/${currentUser._id}`, {
          method: 'DELETE',
        });
        const data = await res.json();
        if (data.success === false) {
          dispatch(deleteUserFailure(data.message));
          return;
        }
        dispatch(deleteUserSuccess(data));
      } catch (error) {
        dispatch(deleteUserFailure(error.message));
      }
    };

   async function handleSignout(){
      try {
        dispatch(signOutUserStart());
        const res = await fetch('/api/auth/signout');
        const data = await res.json();
        if (data.success === false) {
          dispatch(signOutUserFailure(data.message));
        }
        dispatch(signOutUserSuccess(data))
      } catch (error) {
        dispatch(signOutUserFailure(error.message))
      }
    }

  return (

    <div  className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>

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
         <button disabled={loading} 
          className=' bg-gradient-to-r from-pink-500  to-indigo-500 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80'>{loading? '...Loading':'Update'}</button>
      </form>

      <div className='text-center'>

        {
          error && <p className='text-red-700'>{error}</p>
        }
      </div>
      <p className='text-green-700 mt-5'>
        {updateSuccess ? 'User is updated successfully!' : ''}
      </p>

      <div className='flex justify-between mt-5'>
        <span
           onClick={handleDeleteUser}
          className='text-red-700 cursor-pointer'
        >
          Delete account
        </span>
        <span 
        onClick={handleSignout}
         className='text-red-700 cursor-pointer'>
          log out
        </span>
      </div>
     
    </div>
  )
}
