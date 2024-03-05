import React, { useReducer, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../config';
import { Link, useNavigate } from 'react-router-dom';


//auth
import { login, logout, register } from './functions/AuthFunction';
import { authReducer, initialAuthState } from './reducers/AuthReducer';



export const DContext = React.createContext();


export const DProvider = (props) => {
    const Navigate = useNavigate();

    const [authState, authDispatch] = useReducer(authReducer, initialAuthState);



    useEffect(() => {
        console.log("Dcontext runs with api", BASE_URL);
        loadUser();
    }, [])

    const loadUser = () => {
        console.log("load user runs")
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