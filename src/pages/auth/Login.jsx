import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import DContext from '../../context/DContext';

const Login = () => {
    const navigate = useNavigate();

    const {authState,authDispatch,login,logout} = useContext(DContext);
    const {user} = authState;


    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("clicked");
        localStorage.setItem('token',"thisisiaccessjwttoken")
        authDispatch({type:"LOGIN",payload:null});
        navigate("/");
        
    }


    return (
        <>
            <div class="auth_login">
                <div class="auth_bg">
                    <div class="auth_content">
                        <div class="flex50 ">
                            <div class="auth_left">
                                <div class="bg_caption">
                                    <div class="bg_caption_welcome">
                                        <a href="./index.html">
                                            <img src="./assets/images/light-logo.png" class="mb-3" alt="" />
                                        </a>
                                        <h4>Virtual 2 Actual</h4>
                                        <div class="bg_caption_signup">
                                            <p>Don't have an account?</p>
                                            <Link to="/signup">Register Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex50">
                            <div class="auth_right">
                                <form onSubmit = {handleSubmit} class="login_form" enctype="multipart/form-data">
                                    <div class="login_form_inner">
                                        <div class="form_title">
                                            <h3>Login Account</h3>
                                        </div>
                                        <div class="form-group">
                                            <div class="form-floating">
                                                <input type="text" class="form-control" id="loginemail" placeholder="Email" value="Prashant Mishra" />
                                                <label for="loginemail">Email</label>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="form-floating">
                                                <input type="password" class="form-control" id="password" placeholder="Password" value="123456" />
                                                <label for="password">Password</label>
                                            </div>
                                        </div>
                                        <div class="mt-5 mb-5 d-flex align-items-center justify-content-between">
                                            <div class="form_pass">
                                                <a href="#">
                                                    <p class="pb-0">Forgot Password?</p>
                                                </a>
                                            </div>
                                            <div class="form_pass">
                                                {/* <button id="login"  type="submit" class="btn submit-btn">Login</button> */}
                                                <button type='submit' class="btn submit-btn">Login</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;