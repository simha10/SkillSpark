import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Services from './pages/Services';
import Navbar from './components/Navbar';
import Errorpage from './pages/Errorpage';
import Logout from './pages/Logout';
import LearningPage from './pages/LearningPage';
import Profile from './pages/Profile';

import './App.css'

import { AuthProvider } from './store/auth'; 
function App() {

  return (
    <>
    <AuthProvider>
      <BrowserRouter>
        <div className=' z-50'>
        <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
          <Route path="/learn/:techId" element={<LearningPage />} />
          <Route path="*" element={<Errorpage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
    </>
  )
}

export default App;
