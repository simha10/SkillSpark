import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useAuth } from '../store/auth';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const { isLoggedIn, user } = useAuth(); 


    return (
        <>
            <div className="flex justify-between items-center p-6 bg-gray-900 text-white shadow-lg">
                <h1 className="text-4xl font-bold tracking-tight drop-shadow-xl">
                    <Link to="/" className="hover:text-blue-300 transition-colors duration-200">
<span className='text-xl'>is made for you,</span> <span className='text-cyan-400 text-2xl'>{isLoggedIn && user?.name ? user.name : 'Guest'}</span>
                    </Link>
                </h1>
                <div className="md:hidden" onClick={toggleMenu}>
                    {isOpen ? <X className="w-8 h-8 text-blue-300" /> : <Menu className="w-8 h-8 text-blue-300" />}
                </div>
                <nav className={`flex-col md:flex md:flex-row absolute md:static top-16 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent transition-all duration-300 ease-in-out ${isOpen ? 'flex z-50' : 'hidden'} md:gap-8 p-4 md:p-0`}>
                    <Link to="/" className="py-2 md:py-0 text-lg font-medium hover:text-blue-400 hover:border-b-2 border-blue-400 transition-all duration-200">Home</Link>
                    <Link to="/about" className="py-2 md:py-0 text-lg font-medium hover:text-blue-400 hover:border-b-2 border-blue-400 transition-all duration-200">About</Link>
                    <Link to="/services" className="py-2 md:py-0 text-lg font-medium hover:text-blue-400 hover:border-b-2 border-blue-400 transition-all duration-200">Services</Link>
                    <Link to="/contact" className="py-2 md:py-0 text-lg font-medium hover:text-blue-400 hover:border-b-2 border-blue-400 transition-all duration-200">Contact</Link>
                    {isLoggedIn ? (
                        <Link to="/profile" className="py-2 md:py-0 text-lg font-medium hover:text-blue-400 hover:border-b-2 border-blue-400 transition-all duration-200">Profile</Link>
                    ) : (
                        <>
                            <Link to="/login" className="py-2 md:py-0 text-lg font-medium hover:text-blue-400 hover:border-b-2 border-blue-400 transition-all duration-200">Login</Link>
                            <Link to="/register" className="py-2 md:py-0 text-lg font-medium hover:text-blue-400 hover:border-b-2 border-blue-400 transition-all duration-200">Register</Link>
                        </>
                    )}
                </nav>
            </div>
        </>
    );
}

export default Navbar;