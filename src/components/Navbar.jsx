import React from 'react';
import { NavLink } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Navbar = () => {

  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="fixed items-center flex justify-between   w-full p-4 px-[6%] ">
        <h1 className='text-2xl font-semibold'>pomodoro</h1>
         
          
          {user?.displayName ? (
            <>
            <div className='bg-white px-3 py-1.5 rounded-full flex w-[120px] justify-between'>
              <button className='text-gray-500 hover:text-black font-medium' onClick={handleSignOut}>Logout</button>
              <img className='profile-img border-2 border-green-500' src={user.photoURL} />
            </div>
            </>
          ) : (
            <>
            <div className='flex w-[110px] justify-between'>
              <NavLink to='/'>Home</NavLink>
              <NavLink to='/signin'>Sign in</NavLink>
            </div>
            
            </>
          )} 
          
        
    </div>
  )
}

export default Navbar 