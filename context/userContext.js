import { createContext, useContext, useEffect, useState } from 'react';
import { useCookies } from "react-cookie"

export const UserContext = createContext();

export const useUser = () => {
    const context = useContext(UserContext)
    return context;
};

export const UserProvider = ({ children }) => {

    const [cookies, setCookieUser] = useCookies(["user"]);
    const [user, setUser] = useState(null);
    useEffect(() => {
        handleUser();
    }, []);

    const handleUser = async () => {
        if (cookies.user) {
            const res = await fetch(process.env.NEXT_PUBLIC_GET_DATA, {
                headers: {
                    "auth-token": cookies.user,
                }
            });
            const data = await res.json();
            setUser(data);
        }
    }
    return (
        <>
            {!user ? null : (
                <UserContext.Provider value={{ user }}> {children}</UserContext.Provider >
            )}
        </>
    )
}