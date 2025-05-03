import React from "react";
import { useAuth } from "../store/auth";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const { user, LogoutUser } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        LogoutUser();
        navigate("/login");
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-tl from-black via-purple-900 to-pink-900 animate-gradient">
            <motion.div
                className="profile w-96 p-8 bg-gradient-to-b from-white to-gray-100 rounded-2xl shadow-lg border border-gray-200"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                whileHover={{ scale: 1.02, boxShadow: "0 12px 24px rgba(0,0,0,0.15)" }}
            >
                {/* Profile Picture */}
                <motion.div
                    className="flex justify-center mb-6"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.4, type: "spring", stiffness: 120 }}
                >
                    <img
                        src={user.profileImage || "https://via.placeholder.com/100"} // Use profileImage or fallback to default
                        alt="Profile"
                        className="w-24 h-24 rounded-full border-4 border-blue-200 object-cover"
                    />
                </motion.div>

                {/* Name */}
                <motion.h3
                    className="text-xl font-semibold text-gray-800 text-center mb-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                >
                    {user.name || "User"}
                </motion.h3>

                {/* Email */}
                <motion.p
                    className="text-gray-600 text-center mb-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.4 }}
                >
                    <span className="font-medium">Email:</span> {user.email || "N/A"}
                </motion.p>

                {/* Phone */}
                <motion.p
                    className="text-gray-600 text-center mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.4 }}
                >
                    <span className="font-medium">Phone:</span> {user.phone || "N/A"}
                </motion.p>

                {/* Descriptive Text */}
                <motion.p
                    className="text-gray-500 text-sm text-center mb-6 italic"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 0.4 }}
                >
                    Passionate about creating and connecting. Always exploring new horizons!
                </motion.p>

                {/* Logout Button */}
                <motion.button
                    className="w-full py-2 bg-red-500 text-white rounded-md font-medium hover:bg-red-600"
                    onClick={handleLogout}
                    whileHover={{ scale: 1.05, backgroundColor: "#dc2626" }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    style={{ backgroundColor: "#ef4444" }}
                >
                    Logout
                </motion.button>
            </motion.div>
        </div>
    );
};

export default Profile;