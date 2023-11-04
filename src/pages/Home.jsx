import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div 
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0, transition:{duration:0.3}}}
    className="bg-gray-100 min-h-screen flex flex-col justify-center items-center px-4">
      <h1 className="text-[2rem] font-semibold mb-3 text-center">Welcome to the Pomodoro </h1>
      <p className="text-[1rem] mb-3 text-center">
        To continue using the Pomodoro app, please sign in.
      </p>
      <Link
        to="/signin"
        className="bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-6 rounded-lg text-lg transition duration-300 ease-in-out">
        Sign in
      </Link>
    </motion.div>
  );
};

export default Home;
