import { createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const storeTokeninLS = (servertoken) => {
        return localStorage.setItem("token", servertoken);
    };
    
    return (
        <AuthContext.Provider value={{ storeTokeninLS }}>
            {children}
        </AuthContext.Provider>
    );
};
