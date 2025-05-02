import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {  

    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user , setUser] = useState(''); // Initialize user state

    const storeTokenInLS = (servertoken) => {
        setToken(servertoken);  // Update state to trigger re-render
        return localStorage.setItem("token", servertoken);
    };

    let isLoggedIn = !!token;
    console.log("isLoggedIn", isLoggedIn);

    const LogoutUser = () => {
        setToken("");
        localStorage.removeItem("token");
    };

    //JWT Authentication - to get logged in details
    const userAuthentication = async () => {
        const token = localStorage.getItem("token");
        if (token) {
            try {
                const response = await fetch("http://localhost:5000/api/auth/user", {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        // "Content-Type": "application/json",
                    },
                });
                if (response.ok) {
                    const data = await response.json();
                    setUser(data.msg); // Set user data in state
                }
                else{
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
        <AuthContext.Provider value={{ isLoggedIn, storeTokenInLS, LogoutUser, user }}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return authContextValue;
};
export { AuthProvider, useAuth };
export default AuthProvider;
