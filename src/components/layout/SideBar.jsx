import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <>
            <aside id="sidebar" class="sidebar">
                <ul class="sidebar-nav" id="sidebar-nav">
                    <li class="nav-item">
                        <Link to="/" class="nav-link ">
                            <i class="bi bi-grid"></i>
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/clients" class="nav-link ">
                            <i class="bi bi-people"></i>
                            <span>Clients</span>
                        </Link>
                    </li>

                    <li class="nav-item">
                        <Link to="/projects" class="nav-link ">
                            <i class="bi bi-house-gear"></i> 
                            {/* use bi bi-house-gear-fill to fill the icon */}
                            <span>Projects</span>
                        </Link>
                    </li>

                    <li class="nav-item">
                        <Link to="/sites" class="nav-link ">
                            <i class="bi bi-kanban"></i>
                            <span>Sites</span>
                        </Link>
                    </li>

                    <li class="nav-item">
                        <Link to="/revenue" class="nav-link ">
                            <i class="bi bi-currency-rupee"></i>
                            <span>Revenue</span>
                        </Link>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
                            <i class="bi bi-lock"></i><span>Employee Management</span><i class="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul id="components-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <Link to="#">
                                    <i class="bi bi-circle"></i><span>Employees</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                    <i class="bi bi-circle"></i><span>Attendance</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                    <i class="bi bi-circle"></i><span>Salary</span>
                                </Link>
                            </li>
                        </ul>
                    </li>

   

                    <li class="nav-heading">Pages</li>

                    <li class="nav-item">
                        <Link to="/profile" class="nav-link collapsed">
                            <i class="bi bi-person"></i>
                            <span>Profile</span>
                        </Link>
                    </li>

                    <li class="nav-item">
                        <Link to="/faq" class="nav-link collapsed">
                            <i class="bi bi-question-circle"></i>
                            <span>F.A.Q</span>
                        </Link>
                    </li>
                </ul>

            </aside>
        </>
    )
}

export default SideBar