import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({ name: "Guest", email: "", phone: "" });
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const userAuthentication = async () => {
        const token = localStorage.getItem("token");
        const profileImages = [
            "https://th.bing.com/th/id/OIP.KLzjGWNW3Ds2wOM0tVnavgAAAA?pid=ImgDet&w=159&h=283&c=7&dpr=1.3",
            "https://th.bing.com/th/id/OIP.zfqjT0HLbsZ_f776V1jtBwHaHa?w=157&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            "https://tse3.mm.bing.net/th?id=OIP.Iuzus2uF0YIwp1gItMfB7AHaHa&pid=Api&P=0&h=180",
            "https://tse4.mm.bing.net/th?id=OIP.Fy2pggYJGz4VsroD1DvdxwHaHa&pid=Api&P=0&h=180",
        ];

        if (token) {
            try {
                // Fetch user data from the API using the token
                //const response = await fetch("https://localhost:5000/api/auth/user" for local testing
                const response = await fetch("https://skillspark-backend-30l7.onrender.com/api/auth/user", {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log("API Response:", data); // Debug the API response

                    const staticImageIndex = data.msg?.email
                        ? data.msg.email.charCodeAt(0) % profileImages.length
                        : 0;

                    setUser({
                        name: data.msg?.username || "Guest",
                        email: data.msg?.email || "",
                        phone: data.msg?.phone || "",
                        profileImage: profileImages[staticImageIndex],
                    });
                    setIsLoggedIn(true);
                } else {
                    const errorData = await response.json();
                    console.error("Failed to fetch user data:", errorData.message || response.statusText);
                    setUser({ name: "Guest", email: "", phone: "", profileImage: profileImages[0] });
                    setIsLoggedIn(false);
                }
            } catch (error) {
                console.error("Error during user authentication:", error.message);
                setUser({ name: "Guest", email: "", phone: "", profileImage: profileImages[0] });
                setIsLoggedIn(false);
            }
        } else {
            console.warn("No token found in localStorage.");
            setUser({ name: "Guest", email: "", phone: "", profileImage: profileImages[0] });
            setIsLoggedIn(false);
        }
    };

    const LogoutUser = () => {
        localStorage.removeItem("token");
        setUser({ name: "Guest", email: "", phone: "" });
        setIsLoggedIn(false);
        userAuthentication(); // Re-authenticate after logout
    };

    useEffect(() => {
        userAuthentication();
    }, []);

    // Listen for token changes in localStorage
    useEffect(() => {
        const handleStorageChange = () => {
            userAuthentication();
        };

        window.addEventListener("storage", handleStorageChange);
        return () => {
            window.removeEventListener("storage", handleStorageChange);
        };
    }, [user, isLoggedIn]);

    return (
        <AuthContext.Provider value={{ user, isLoggedIn, LogoutUser }}>
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