import React from 'react'

const Header = () => {
  return (
    <>
      {/* <!--======= START HEADER ======= --> */}
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
                  <span class="d-none d-md-block dropdown-toggle ps-2">Prashant Mishra</span>
              </a>

              <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                <li class="dropdown-header">
                  <h6>Prashant Mishra</h6>
                  <span>Web Designer</span>
                </li>
                <li>
                  <hr class="dropdown-divider"/>
                </li>

                <li>
                  <a class="dropdown-item d-flex align-items-center" href="profile.html">
                    <i class="bi bi-person"></i>
                    <span>My Profile</span>
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider"/>
                </li>

                <li>
                  <a class="dropdown-item d-flex align-items-center" href="profile.html">
                    <i class="bi bi-gear"></i>
                    <span>Account Settings</span>
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider"/>
                </li>

                <li>
                  <a class="dropdown-item d-flex align-items-center" href="#">
                    <i class="bi bi-question-circle"></i>
                    <span>Need Help?</span>
                  </a>
                </li>

                <li>
                  <hr class="dropdown-divider"/>
                </li>

                <li>
                  <a class="dropdown-item d-flex align-items-center" href="login.html">
                    <i class="bi bi-box-arrow-right"></i>
                    <span>Sign Out</span>
                  </a>
                </li>

              </ul>
            </li>

          </ul>
        </nav>

      </header>
      {/* <!-- ======= END HEADER ======= --> */}

      {/* <!-- ======= START SIDEBAR ======= --> */}
      <aside id="sidebar" class="sidebar">

        <ul class="sidebar-nav" id="sidebar-nav">
          <li class="nav-item">
            <a class="nav-link " href="index.html">
              <i class="bi bi-grid"></i>
              <span>Dashboard</span>
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
              <i class="bi bi-lock"></i><span>Admin</span><i class="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul id="components-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
              <li>
                <a href="#">
                  <i class="bi bi-circle"></i><span>Pages List</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="bi bi-circle"></i><span>Admin 1</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="bi bi-circle"></i><span>Admin 2</span>
                </a>
                </li>
            </ul>
          </li>

          <li class="nav-item">
            <a class="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#">
              <i class="bi bi-journal-text"></i><span>Forms</span><i class="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul id="forms-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
              <li>
                <a href="edit-forms-layout.html">
                  <i class="bi bi-circle"></i><span>Edit Form Layouts</span>
                </a>
              </li>
              <li>
                <a href="forms-layout.html">
                  <i class="bi bi-circle"></i><span>Form Layouts</span>
                </a>
              </li>
            </ul>
          </li>

          <li class="nav-item">
            <a class="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
              <i class="bi bi-layout-text-window-reverse"></i><span>Tables</span><i class="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul id="tables-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
              <li>
                <a href="tables-data.html">
                  <i class="bi bi-circle"></i><span>Data Tables</span>
                </a>
              </li>
            </ul>
          </li>
          {/* <!-- End Tables Nav --> */}

          <li class="nav-item">
            <a class="nav-link collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse" href="#">
              <i class="bi bi-bar-chart"></i><span>Charts</span><i class="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul id="charts-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
              <li>
                <a href="charts.html">
                  <i class="bi bi-circle"></i><span>Chart</span>
                </a>
              </li>
              <li>
                <a href="rich-editor.html">
                  <i class="bi bi-circle"></i><span>Rich Editor</span>
                </a>
              </li>
            </ul>
          </li>
          
          {/* <!-- End Charts Nav --> */}

          <li class="nav-heading">Pages</li>

          <li class="nav-item">
            <a class="nav-link collapsed" href="profile.html">
              <i class="bi bi-person"></i>
              <span>Profile</span>
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link collapsed" href="faq.html">
              <i class="bi bi-question-circle"></i>
              <span>F.A.Q</span>
            </a>
          </li>
        </ul>

      </aside>
      {/* <!-- End Sidebar--> */}
    </>
  )
}

export default Header