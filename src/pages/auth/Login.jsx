import React, { useContext, useEffect } from 'react'
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import DContext from '../../context/DContext';

const Login = () => {
    const navigate = useNavigate();
    //const {redirecturl} = useParams();
    const [searchParams, setSearchParams] = useSearchParams();

    const {authState,authDispatch,login,logout} = useContext(DContext);
    const {user} = authState;


    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("clicked");
        localStorage.setItem('token',"thisisiaccessjwttoken")
        authDispatch({type:"LOGIN",payload:null});
        redirectRoute();
        
    }

    const redirectRoute =() =>{
        let redirectUrl = searchParams.get('redirecturl')
        if(redirectUrl !== null){
            console.log("redirect url found",redirectUrl);
            navigate(`/${redirectUrl}`);
        }else{
            navigate("/");
        }
    }

    useEffect(()=>{

    },[])


    return (
        <>
            <div className="auth_login">
                <div className="auth_bg">
                    <div className="auth_content">
                        <div className="flex50 ">
                            <div className="auth_left">
                                <div className="bg_caption">
                                    <div className="bg_caption_welcome">
                                        <a href="./index.html">
                                            <img src="./assets/images/light-logo.png" className="mb-3" alt="" />
                                        </a>
                                        <h4>Virtual 2 Actual</h4>
                                        <div className="bg_caption_signup">
                                            <p>Don't have an account?</p>
                                            <Link to="/signup">Register Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex50">
                            <div className="auth_right">
                                <form onSubmit = {handleSubmit} className="login_form" enctype="multipart/form-data">
                                    <div className="login_form_inner">
                                        <div className="form_title">
                                            <h3>Login Account</h3>
                                        </div>
                                        <div className="form-group">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="loginemail" placeholder="Email" value="Prashant Mishra" />
                                                <label for="loginemail">Email</label>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="form-floating">
                                                <input type="password" className="form-control" id="password" placeholder="Password" value="123456" />
                                                <label for="password">Password</label>
                                            </div>
                                        </div>
                                        <div className="mt-5 mb-5 d-flex align-items-center justify-content-between">
                                            <div className="form_pass">
                                                <a href="#">
                                                    <p className="pb-0">Forgot Password?</p>
                                                </a>
                                            </div>
                                            <div className="form_pass">
                                                {/* <button id="login"  type="submit" className="btn submit-btn">Login</button> */}
                                                <button type='submit' className="btn submit-btn">Login</button>
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