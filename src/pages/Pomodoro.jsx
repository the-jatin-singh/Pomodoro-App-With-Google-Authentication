import { UserAuth } from '../context/AuthContext';
import { motion } from "framer-motion";
import Spinner from '../components/Spinner';
import { PomodoroMain } from '../components/PomodoroMain';

const Pomodoro = () => {

  const { user } = UserAuth();

  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0, transition:{duration:0.3}}}
    className=''
    >
      <div className='flex justify-center items-center h-[100vh]'>
        
        {user.displayName ? <PomodoroMain />:<Spinner />}
      </div>
    </motion.div>
  )
}

export default Pomodoro