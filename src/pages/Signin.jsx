import React, { useEffect } from 'react';
import { GoogleButton } from 'react-google-button';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const Signin = () => {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate('/pomodoro');
    }
  }, [user]);

  return (
    <motion.div 
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0, transition:{duration:0.3}}}
    className='bg-gray-100 min-h-screen flex flex-col justify-center items-center'>
      
      <div className='border-2 rounded-md m-auto px-5 pb-6 mt-[30vh]'>
        <h1 className='text-3xl font-semibold py-8 text-center'>Sign in options</h1>
        <GoogleButton className='mb-3' onClick={handleGoogleSignIn} />
        <Link
        className='ml-[e0px] text-gray-500'
        to='/'>Go back to Home</Link>
      </div>
    </motion.div>
  );
};

export default Signin;
