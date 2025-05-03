import { createContext, useContext, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState({ name: "", email: "", phone: "" });

    const storeTokenInLS = (servertoken) => {
        setToken(servertoken);
        localStorage.setItem("token", servertoken);
    };

    const LogoutUser = () => {
        setToken("");
        setUser({ name: "", email: "", phone: "" });
        localStorage.removeItem("token");
    };

    const userAuthentication = async () => {
        const token = localStorage.getItem("token");
        if (token) {
            try {
                const response = await fetch("https://skillspark-backend-30l7.onrender.com/api/auth/user", {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                if (response.ok) {
                    const data = await response.json();
                    setUser(data.user || { name: "", email: "", phone: "" });
                } else {
                    console.error("Failed to fetch user data:", response.statusText);
                }
            } catch (error) {
                console.error("Error during user authentication:", error);
            }
        }
    };

    useEffect(() => {
        userAuthentication();
    }, []);

    return (
        <AuthContext.Provider value={{ isLoggedIn: !!token, user, storeTokenInLS, LogoutUser, userAuthentication }}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};

export { AuthProvider, useAuth };