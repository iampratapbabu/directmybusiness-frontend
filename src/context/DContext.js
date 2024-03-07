import React, { useReducer, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../config';
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom';


//auth
import { login, logout, register } from './functions/AuthFunction';
import { authReducer, initialAuthState } from './reducers/AuthReducer';



export const DContext = React.createContext();


export const DProvider = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();


    const [authState, authDispatch] = useReducer(authReducer, initialAuthState);



    useEffect(() => {
        console.log("Dcontext started with api", BASE_URL);
        loadUser();
    }, [])

    const loadUser = () => {
        let redirecturl = location.pathname.substring(1);
        let token = localStorage.getItem('token');
        if (!token) {
            console.log("No token found logging out");
            authDispatch({ type: "LOGOUT" });
            if(!(location.pathname.includes('login'))){
                console.log(`full url created /login?redirecturl=${redirecturl}`);
                navigate(`/login?redirecturl=${redirecturl}`);
            }else{
                console.log("simple login");
                navigate('/login')
            }
            return false;
        }else{
            //make a call to server using token and fetch the detail to keep in context
            let user = {
                name:"Tej Pratap",
                role:"admin"
            }
            authDispatch({ type: "USER_LOADED", payload: user });

        }
    }

    return (
        <DContext.Provider
            value={{
                // auth Reducer state
                authState,
                authDispatch,
                // auth global functions
                login,
                register,
                logout,
              
            }}>
            {props.children}
        </DContext.Provider>
    )
}

export default DContext