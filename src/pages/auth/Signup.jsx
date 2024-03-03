import React from 'react'
import { Link } from 'react-router-dom';

const Signup = () => {
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
                                    <img  src="./assets/images/light-logo.png" class="mb-3" alt=""/>
                                </a>
                                <h4>Virtual 2 Actual</h4>
                                <div class="bg_caption_signup">
                                    <p>You have an account?</p>
                                    <Link to='/login'>Login Now</Link>
                                </div>
                            </div>
                       </div>
                    </div>
                </div>
                <div class="flex50">
                    <div class="auth_right">
                        <form method="post" class="login_form" enctype="multipart/form-data">
                            <div class="login_form_inner">
                                <div class="form_title">
                                    <h3>Register Account</h3>
                                </div>
                                <div class="form-group">
                                    <div class="form-floating">
                                        <input type="text" class="form-control" id="userName" placeholder="User Name" value="Prashant Mishra"/>
                                        <label for="userName">User Name</label>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="form-floating">
                                        <input type="email" class="form-control" id="registeremail" placeholder="Email" value="prashant@gmail.com"/>
                                        <label for="registeremail">Email</label>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="form-floating">
                                        <input type="password" class="form-control" id="registerpassword" placeholder="Password" value="123456"/>
                                        <label for="registerpassword">Password</label>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="form-floating">
                                        <input type="password" class="form-control" id="confirmregisterpassword" placeholder="Confirm Password" value="123456"/>
                                        <label for="confirmregisterpassword">Confirm Password</label>
                                    </div> 
                                </div>
                                <div class="mt-5  d-flex align-items-center justify-content-between">
                                    <div class="form_pass w-100">
                                        <a href="login.html"  type="submit" class="btn submit-btn w-100">Register</a>
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

export default Signup;