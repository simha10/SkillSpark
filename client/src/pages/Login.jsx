import React, { useState } from "react";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [User, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
    //const URL ="https://localhost:5000/api/auth/user" for local testing
  const URL = "https://skillspark-backend-30l7.onrender.com/api/auth/login";

  // Function to store token in localStorage
  const storeTokenInLS = (token) => {
    localStorage.setItem("token", token);
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
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
  
      if (response.ok) {
        const res_data = await response.json();
        storeTokenInLS(res_data.token);
        alert("Login successful");
        setUser({ email: "", password: "" });
        navigate("/profile");
      } else {
        const errorData = await response.json();
        alert(errorData.message || "Invalid credentials");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Unable to connect to the server. Please try again later.");
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 animate-gradient flex flex-col relative">
        <section className="flex flex-col md:flex-row items-center justify-center mt-10 px-6 py-12 max-w-6xl mx-auto gap-12 bg-white/90 backdrop-blur-lg p-8 rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl animate-slide-in">
          <div className="w-full md:w-1/2 max-w-md relative group">
            <img
              src="/src/assets/login.png"
              alt="login page image"
              className="w-full h-auto object-cover rounded-2xl transform transition-all duration-700 group-hover:scale-105 group-hover:-rotate-3 shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          <form onSubmit={handleSubmit} className="w-full md:w-1/2 max-w-md space-y-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-600 animate-pulse">
                Welcome Back
              </h1>
              <p className="text-gray-500 text-lg tracking-wide mt-2">Login to continue your journey</p>
            </div>

            <div className="space-y-6">
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
              </div>

              <div className="space-y-4">
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-gradient-to-r from-indigo-600 to-pink-600 hover:from-indigo-700 hover:to-pink-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  Login
                </button>

                <p className="text-center text-sm text-gray-600">
                  Don’t have an account?{" "}
                  <a href="/register" className="text-indigo-600 hover:text-indigo-800 font-medium transition-colors duration-300">
                    Register Now
                  </a>
                </p>
              </div>
            </div>
          </form>
        </section>
        <div className="absolute bottom-0 w-full">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Login;