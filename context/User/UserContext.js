import { createContext, useEffect, useReducer } from 'react';
import { useCookies } from 'react-cookie';
import userReducer from './userReducer'

export const GET_USER = "GET_USER"

export const userContext = createContext();

export const UserContextWrapper = ({ children }) => {

    const [cookie, setCookie] = useCookies(["user"]);

    const initialState = {
        user: null,
    }

    const [state, dispatch] = useReducer(userReducer, initialState);

    useEffect(async () => {

        const getUser = async () => {
            const res = await fetch(process.env.NEXT_PUBLIC_GET_DATA,
                {
                    headers: {
                        "auth-token": cookie.user
                    }
                });
            const data = await res.json();

            if (Object.keys(data).length !== 0) {
                dispatch({
                    type: GET_USER,
                    payload: data
                })
            }
        }
        if (cookie.user) {
            getUser();
        }

    }, []);

    return (
        <userContext.Provider value={{ user: state.user }}>
            {children}
        </userContext.Provider>
    );
}