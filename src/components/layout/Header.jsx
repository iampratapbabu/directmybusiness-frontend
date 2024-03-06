import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import DContext from '../../context/DContext'

const Header = () => {
  const navigate = useNavigate();

  const {authState,authDispatch, logout} = useContext(DContext);
  const {user} = authState;


  const handlelogout = () =>{
    logout();
    authDispatch({type:"LOGOUT",payload:null})
    navigate('/login');
  }

  return (
    <>
      <header id="header" class="header fixed-top d-flex align-items-center">

        <div class="d-flex align-items-center justify-content-between">
          <div class="logo d-flex align-items-center justify-content-center">
            <a href="index.html" class="width-min-content">
              <img src="./assets/images/logo/dark-logo.png" alt=""/>
                {/* <!-- <span class="d-none d-lg-block">Virtual to Actual</span> --> */}
            </a>
          </div>
          <span id="toggle-sidebar-btn" class="hamburger-icon toggle-sidebar-btn">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>

        <div class="search-bar">
          <form class="search-form d-flex align-items-center" method="POST" action="#">
            <input type="text" name="query" placeholder="Search" title="Enter search keyword"/>
              <button type="submit" title="Search"><i class="bi bi-search"></i></button>
          </form>
        </div>

        <nav class="header-nav ms-auto">
          <ul class="d-flex align-items-center">

            <li class="nav-item d-block d-lg-none">
              <a class="nav-link nav-icon search-bar-toggle " href="#">
                <i class="bi bi-search"></i>
              </a>
            </li>

            <li class="nav-item dropdown">

              <a class="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                <i class="bi bi-bell"></i>
                <span class="badge bg-primary badge-number">4</span>
              </a>

              <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                <li class="dropdown-header">
                  You have 4 new notifications
                  <a href="#"><span class="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
                </li>
                <li>
                  <hr class="dropdown-divider"/>
                </li>

                <li class="notification-item">
                  <div class="noti-msg">
                    <i class="bi bi-check-circle-fill text-success"></i>
                    <p>
                      <b>Congratulation </b>
                    </p>
                  </div>
                  <p class="time">Just Now</p>
                </li>
                <li>
                  <hr class="dropdown-divider"/>
                </li>
                <li class="notification-item">
                  <div class="noti-msg">
                    <i class="bi bi-person-circle text-primary"></i>
                    <p>
                      <b>John Micle </b>
                      is now following you.
                    </p>
                  </div>
                  <p class="time">30 min</p>
                </li>
                <li>
                  <hr class="dropdown-divider"/>
                </li>

                <li class="notification-item">
                  <div class="noti-msg">
                    <i class="bi bi-chat-text-fill text-danger"></i>
                    <p>
                      <b>Sneha Jogi </b>
                      sent you a message.
                    </p>
                  </div>
                  <p class="time">7 min</p>
                </li>
                <li>
                  <hr class="dropdown-divider"/>
                </li>



                <li class="dropdown-footer">
                  <a href="#">Show all notifications</a>
                </li>

              </ul>

            </li>

            <li class="nav-item dropdown">

              <a class="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                <i class="bi bi-chat-left-text"></i>
                <span class="badge bg-success badge-number">3</span>
              </a>

              <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
                <li class="dropdown-header">
                  You have 3 new messages
                  <a href="#"><span class="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
                </li>
                <li>
                  <hr class="dropdown-divider"/>
                </li>

                <li class="message-item">
                  <a href="#">
                    <img src="./assets/images/messages-1.jpg" alt="" class="rounded-circle"/>
                      <div>
                        <div class="d-flex justify-content-between align-items-center">
                          <p> <b>Maria Hudson</b></p>
                          <p>4 hrs</p>
                        </div>
                        <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                      </div>
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider"/>
                </li>

                <li class="message-item">
                  <a href="#">
                    <img src="./assets/images/messages-2.jpg" alt="" class="rounded-circle"/>
                      <div>
                        <div class="d-flex justify-content-between align-items-center">
                          <p> <b>Anna Nelson</b></p>
                          <p>6 hrs</p>
                        </div>
                        <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                      </div>
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider"/>
                </li>
                <li class="dropdown-footer">
                  <a href="#">Show all messages</a>
                </li>

              </ul>

            </li>

            <li class="nav-item dropdown pe-3">

              <a class="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                <img src="./assets/images/profile-img.jpg" alt="Profile" class="rounded-circle"/>
                  <span class="d-none d-md-block dropdown-toggle ps-2">Admin</span>
              </a>

              <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                <li class="dropdown-header">
                  <h6>Admin</h6>
                  <span>Full Access</span>
                </li>
                <li>
                  <hr class="dropdown-divider"/>
                </li>

                <li>
                  <Link to="/profile" class="dropdown-item d-flex align-items-center">
                    <i class="bi bi-person"></i>
                   <span>My Profile</span>
                  </Link>
                </li>
                <li>
                  <hr class="dropdown-divider"/>
                </li>

                <li>
                  <Link to="/profile" class="dropdown-item d-flex align-items-center">
                    <i class="bi bi-gear"></i>
                    <span>Account Settings</span>
                  </Link>
                </li>
                <li>
                  <hr class="dropdown-divider"/>
                </li>

                <li>
                  <Link to="/faq" class="dropdown-item d-flex align-items-center">
                    <i class="bi bi-question-circle"></i>
                    <span>Need Help?</span>
                  </Link>
                </li>

                <li>
                  <hr class="dropdown-divider"/>
                </li>

                <li>
                  <Link class="dropdown-item d-flex align-items-center">
                    <i class="bi bi-box-arrow-right"></i>
                    <Link onClick={handlelogout}><span>Sign Out</span></Link>
                  </Link>
                </li>

              </ul>
            </li>

          </ul>
        </nav>

      </header>
 
    </>
  )
}

export default Header