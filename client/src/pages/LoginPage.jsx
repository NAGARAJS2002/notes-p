import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector ,useDispatch } from 'react-redux';
import {loginFailure,loginSuccess,loginStart} from "../redux/user/userSlice"
import OAuth from '../components/OAuth';
export default function LoginPage() {
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const {loading , error} = useSelector(state => state.user)
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(loginStart())
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
         dispatch(loginFailure(data.message))
        return;
      }
       dispatch(loginSuccess(data))
      navigate('/dashboard');
    } catch (error) {
    dispatch(loginFailure(error.message))
    }
  };
  return (
    <div className='p-3 max-w-lg mx-auto'>
              <Link to={'/'} > <h1 className='text-5xl text-center font-bold my-7'>Notes</h1></Link>
      <h1 className='text-3xl text-center font-semibold my-7'>login</h1>
      <form onSubmit={handleSubmit} className='flex flex-col  gap-4'>
        
        <input
          type='email'
          placeholder='email'
          className='border p-3 rounded-lg'
          id='email'
          onChange={handleChange}
        />
        <input
          type='password'
          placeholder='password'
          className='border p-3 rounded-lg'
          id='password'
          onChange={handleChange}
        />

        <button
          disabled={loading}
          className=' bg-gradient-to-r from-pink-500  to-indigo-500   text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
        >
          {loading ? 'Loading...' : 'Login'}
        </button>
        <OAuth/>
      </form>
      <div className='flex gap-2 mt-5'>
        <p> donot Have an account?</p>
        <Link to={'/register'}>
          <span className='text-blue-700'>Register</span>
        </Link>
      </div>
    

{error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
  );
}