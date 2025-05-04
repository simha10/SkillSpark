import React from 'react';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Footer from './Footer';
import { useAuth } from "../store/auth";

const Register = () => {
  const [User, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate();
  //const URL ="https://localhost:5000/api/auth/user" for local testing
  const URL = "https://skillspark-backend-30l7.onrender.com/api/auth/register";

  const storeTokenInLS = (token) => {
    localStorage.setItem("token", token);
  };

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...User,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(User),
      });

      console.log("Raw response:", response); // Log the raw response

      if (response.ok) {
        const res_data = await response.json();
        console.log("Parsed response data:", res_data); // Log parsed response
        storeTokenInLS(res_data.token);
        setUser({
          username: "",
          email: "",
          phone: "",
          password: "",
        });
        navigate("/login");
        alert("Registration Successful");
      } else {
        const errorData = await response.json();
        console.error("Server error response:", errorData); // Log server error
        if (errorData.msg === "email already exists") {
          alert("This email is already registered. Please use a different email or log in.");
        } else {
          alert(`Error: ${errorData.msg || "Registration failed"}`);
        }
      }
    } catch (err) {
      console.error("Network error:", err); // Log network errors
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 animate-gradient flex flex-col relative">
        <section className="flex flex-col md:flex-row items-center justify-center mt-4 px-6 py-16 max-w-6xl mx-auto gap-12 bg-white/90 backdrop-blur-lg p-8 rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl animate-slide-in">
          <div className="w-full md:w-1/2 max-w-md relative group">
            <img
              src="https://img.freepik.com/free-vector/privacy-policy-concept-illustration_114360-7853.jpg?ga=GA1.1.277367697.1746265751&semt=ais_hybrid&w=740"
              alt="register page image"
              className="w-full h-auto object-cover rounded-2xl transform transition-all duration-700 group-hover:scale-105 group-hover:rotate-3 shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          <form onSubmit={handleSubmit} className="w-full md:w-1/2 max-w-md space-y-8 ">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-600 animate-pulse">
                Create Account
              </h1>
              <p className="text-gray-500 text-lg tracking-wide mt-2">Join us to get started</p>
            </div>

            <div className="space-y-6">
              <div className="relative">
                <label htmlFor="username" className="block text-sm font-semibold text-gray-700 mb-2 transition-all duration-300">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  placeholder="Enter your username"
                  id="username"
                  required
                  autoComplete="off"
                  className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-indigo-200 focus:border-indigo-500 outline-none transition-all duration-300 hover:shadow-lg"
                  value={User.username}
                  onChange={handleInput}
                />
                <span className="absolute inset-y-0 right-4 flex items-center text-gray-400 top-10">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </span>
              </div>

              <div className="relative">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2 transition-all duration-300">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  id="email"
                  required
                  autoComplete="off"
                  className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-indigo-200 focus:border-indigo-500 outline-none transition-all duration-300 hover:shadow-lg"
                  value={User.email}
                  onChange={handleInput}
                />
                <span className="absolute inset-y-0 right-4 flex items-center text-gray-400 top-10">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l9 6 9-6m0 12H3V8h18v12z" />
                  </svg>
                </span>
              </div>

              <div className="relative">
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2 transition-all duration-300">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Enter your phone number"
                  id="phone"
                  required
                  autoComplete="off"
                  value={User.phone}
                  onChange={handleInput}
                  className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-indigo-200 focus:border-indigo-500 outline-none transition-all duration-300 hover:shadow-lg"
                />
                <span className="absolute inset-y-0 right-4 flex items-center text-gray-400 top-10">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
              </div>

              <div className="relative">
                <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2 transition-all duration-300">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  id="password"
                  required
                  autoComplete="off"
                  value={User.password}
                  onChange={handleInput}
                  className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-indigo-200 focus:border-indigo-500 outline-none transition-all duration-300 hover:shadow-lg"
                />
                <span className="absolute inset-y-0 right-4 flex items-center text-gray-400 top-10">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0-1.1.9-2 2-2s2 .9 2 2-2 4-2 4m-4-4c0-1.1.9-2 2-2s2 .9 2 2m-6 2c0-1.1.9-2 2-2s2 .9 2 2m-6 2c0-1.1.9-2 2-2s2 .9 2 2m8-8V4m4 4h-4m-4 8h8m-8-4h8" />
                  </svg>
                </span>
              </div>

              <div className="space-y-4">
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-gradient-to-r from-indigo-600 to-pink-600 hover:from-indigo-700 hover:to-pink-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  Register
                </button>

                <p className="text-center text-sm text-gray-600">
                  Already have an account?{' '}
                  <Link to="/login" className="text-indigo-600 hover:text-indigo-800 font-medium transition-colors duration-300">
                    Log in
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </section>
        <div className="absolute bottom-0 w-full">
          <Footer />
        </div>
      </div>
      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 10s ease infinite;
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-in {
          animation: slideIn 0.6s ease-out;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .hover\\:shadow-2xl {
          box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </>
  );
};

export default Register;