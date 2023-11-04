import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Pomodoro from "./pages/Pomodoro";
import { AuthContextProvider } from "./context/AuthContext";
import Protected from "./components/Protected";

// framer motion
import { AnimatePresence } from "framer-motion";
import Footer from "./components/Footer";

function App() {

  const location = useLocation()

  return (
    <div>
      <AuthContextProvider>
      <Navbar />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/Pomodoro" element={<Protected><Pomodoro /></Protected>} />
        </Routes>
      </AnimatePresence>
      <Footer />
      </AuthContextProvider>
    </div>
  );
}

export default App;
 