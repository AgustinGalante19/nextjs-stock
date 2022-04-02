import { useState, useEffect } from 'react'
import UserContext from './UserContext';
import { useCookies } from 'react-cookie';

const UserState = ({ children }) => {

    const [user, setUser] = useState(null);
    const [cookie, setCookie] = useCookies(["user"]);

    const handleAPI = async () => {
        if (cookie) {
            const res = await fetch(process.env.NEXT_PUBLIC_GET_DATA,
                {
                    headers: {
                        "auth-token": cookie.user
                    }
                });

            const userdata = await res.json();
            const thisUser = {
                _id: userdata._id,
                name: userdata.name,
                lastName: userdata.lastname,
                username: userdata.username,
                email: userdata.email,
                products: userdata.products,
            }
            console.log(thisUser)
            setUser(thisUser);
        }
    }

    useEffect(() => {
        handleAPI();
    }, []);

    return (
        <UserContext.Provider value={{ user }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserState;