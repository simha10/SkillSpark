import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import { useAuth } from '../store/auth';

const Contact = () => {
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const { user } = useAuth();

  useEffect(() => {
    setContact({
      username: user?.username || "",
      email: user?.email || "",
      message: "",
    });
  }, [user]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setContact((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //const response = await fetch("https://localhost:5000/api/auth/user" for local testing
      const response = await fetch("https://skillspark-backend-30l7.onrender.com/api/form/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });

      if (response.ok) {
        setSubmitted(true);
        setContact({ username: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 3000);
        console.log("Contact data submitted successfully");
      } else {
        console.error("Failed to submit contact data");
      }
    } catch (error) {
      console.error("Error submitting contact data:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 animate-gradient">
      <div className="px-4 py-16 max-w-7xl mx-auto">
        <section className="flex flex-col lg:flex-row items-center justify-center gap-12 bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-8 lg:p-12 transition-all duration-500 hover:shadow-3xl">
          <div className="w-full lg:w-1/2 max-w-md relative">
            <img
              src="https://img.freepik.com/free-vector/forms-concept-illustration_114360-4957.jpg?ga=GA1.1.277367697.1746265751&semt=ais_hybrid&w=740"
              alt="Contact illustration"
              className="w-full h-auto rounded-xl transform transition-all duration-700 hover:scale-105 hover:rotate-2"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          <form onSubmit={handleSubmit} className="w-full lg:w-1/2 max-w-md space-y-8">
            <div className="text-center mb-10">
              <h1 className="text-4xl font-extrabold text-gray-900 mb-3 bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600 animate-pulse">
                Get in Touch
              </h1>
              <p className="text-gray-500 text-lg tracking-wide">We're here to assist you!</p>
            </div>

            {submitted && (
              <div className="p-4 bg-green-100 rounded-xl border border-green-300 animate-fade-in">
                <p className="text-green-700 text-center font-medium">
                  Message sent successfully!
                </p>
              </div>
            )}

            <div className="space-y-6">
              <div className="relative">
                <label className="block text-sm font-semibold text-gray-700 mb-2 transition-all duration-300">
                  Name
                </label>
                <input
                  type="text"
                  name="username"
                  value={contact.username}
                  onChange={handleInput}
                  placeholder="Your name"
                  className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-indigo-200 focus:border-indigo-500 outline-none transition-all duration-300 hover:shadow-lg"
                  required
                />
                <span className="absolute inset-y-0 right-4 flex items-center text-gray-400 top-8">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </span>
              </div>

              <div className="relative">
                <label className="block text-sm font-semibold text-gray-700 mb-2 transition-all duration-300">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={contact.email}
                  onChange={handleInput}
                  placeholder="your@email.com"
                  className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-indigo-200 focus:border-indigo-500 outline-none transition-all duration-300 hover:shadow-lg"
                  required
                />
                <span className="absolute inset-y-0 right-4 flex items-center text-gray-400 top-8">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l9 6 9-6m0 12H3V8h18v12z" />
                  </svg>
                </span>
              </div>

              <div className="relative">
                <label className="block text-sm font-semibold text-gray-700 mb-2 transition-all duration-300">
                  Message
                </label>
                <textarea
                  name="message"
                  value={contact.message}
                  onChange={handleInput}
                  placeholder="How can we help you?"
                  className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-indigo-200 focus:border-indigo-500 outline-none transition-all duration-300 hover:shadow-lg resize-none min-h-[140px]"
                  required
                />
                <span className="absolute inset-y-0 right-4 flex items-start text-gray-400 top-10">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m-4 4h10M5 5v14a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2z" />
                  </svg>
                </span>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 bg-gradient-to-r from-indigo-600 to-pink-600 hover:from-indigo-700 hover:to-pink-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                Send Message
              </button>
            </div>
          </form>
        </section>
      </div>
      <Footer />
      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 15s ease infinite;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out;
        }
        .hover\\:shadow-3xl {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </div>
  );
};

export default Contact;