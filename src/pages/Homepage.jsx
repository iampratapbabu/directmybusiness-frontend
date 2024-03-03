import React from 'react';

const Homepage = () => {
  return (
    <>
      <main id="main" class="main">

        <div class="pagetitle">
          <h1>Dashboard</h1>
          <nav>
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Dashboard</li>
            </ol>
          </nav>
        </div>

        <section class="section dashboard">
          <div class="row">
            <div class="col-lg-12">
              <div class="row">
                <div class="col-xxl-3 col-md-6">
                  <div class="card info-card welcome-card">
                    <div class="card-body">
                      <div class="d-flex">
                        <div class="flex-grow-1">
                          <h1>Hello, Prashant</h1>
                          <p>Welcome back! Let's start from where you left.</p><a class="btn" href="#">View Profile</a>
                        </div>
                        <div class="flex-shrink-0"> <img src="../assets/images/dashboard/welcome.png" alt="" /></div>
                      </div>
                    </div>

                  </div>
                </div>
                <div class="col-xxl-3 col-md-6">
                  <div class="card info-card sales-card">

                    <div class="filter">
                      <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                      <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li class="dropdown-header text-start">
                          <h6>Filter</h6>
                        </li>

                        <li><a class="dropdown-item" href="#">Today</a></li>
                        <li><a class="dropdown-item" href="#">This Month</a></li>
                        <li><a class="dropdown-item" href="#">This Year</a></li>
                      </ul>
                    </div>

                    <div class="card-body">
                      <h5 class="card-title">Sales <span>| Today</span></h5>

                      <div class="d-flex align-items-center">
                        <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i class="bi bi-cart"></i>
                        </div>
                        <div class="ps-3">
                          <h6>145</h6>
                          <span class="text-success small pt-1 fw-bold">12%</span> <span
                            class="text-muted small pt-2 ps-1">increase</span>

                        </div>
                      </div>
                    </div>

                  </div>
                </div>
                <div class="col-xxl-3 col-md-6">
                  <div class="card info-card revenue-card">

                    <div class="filter">
                      <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                      <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li class="dropdown-header text-start">
                          <h6>Filter</h6>
                        </li>

                        <li><a class="dropdown-item" href="#">Today</a></li>
                        <li><a class="dropdown-item" href="#">This Month</a></li>
                        <li><a class="dropdown-item" href="#">This Year</a></li>
                      </ul>
                    </div>

                    <div class="card-body">
                      <h5 class="card-title">Revenue <span>| This Month</span></h5>

                      <div class="d-flex align-items-center">
                        <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i class="bi bi-currency-dollar"></i>
                        </div>
                        <div class="ps-3">
                          <h6>$3,264</h6>
                          <span class="text-success small pt-1 fw-bold">8%</span> <span
                            class="text-muted small pt-2 ps-1">increase</span>

                        </div>
                      </div>
                    </div>

                  </div>
                </div>
                <div class="col-xxl-3 col-xl-12">

                  <div class="card info-card customers-card">

                    <div class="filter">
                      <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                      <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li class="dropdown-header text-start">
                          <h6>Filter</h6>
                        </li>

                        <li><a class="dropdown-item" href="#">Today</a></li>
                        <li><a class="dropdown-item" href="#">This Month</a></li>
                        <li><a class="dropdown-item" href="#">This Year</a></li>
                      </ul>
                    </div>

                    <div class="card-body">
                      <h5 class="card-title">Customers <span>| This Year</span></h5>

                      <div class="d-flex align-items-center">
                        <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i class="bi bi-people"></i>
                        </div>
                        <div class="ps-3">
                          <h6>1244</h6>
                          <span class="text-danger small pt-1 fw-bold">12%</span> <span
                            class="text-muted small pt-2 ps-1">decrease</span>

                        </div>
                      </div>

                    </div>
                  </div>

                </div>

                {/* <!-- Card Listing Sales --> */}
                <div class="col-12">
                  <div class="d-flex align-items-center justify-content-between">
                    <h5 class="card-title">All Best Courses <span>| Today</span></h5>
                  </div>
                  <div class="row">
                    <div class="col-lg-3">

                      {/* <!-- Card with an image on top --> */}
                      <div class="card">
                        <img src="./assets/images/course1.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                          <div class="course-box pt-4">
                            <h4>PHP Development Course</h4>
                            <div class="text-muted mb-3">
                              <span class="m-r-10">April 23</span>
                              <a class="course-likes m-l-10" href="#"><i class="bi bi-heart"></i> 654</a>
                            </div>
                            <p class="mb-3"><span><i class="ti-alarm-clock"></i> Duration: 6 Months</span></p>
                            <p class="mb-3"><span><i class="ti-user"></i> Professor: Jane Doe</span></p>
                            <p class="mb-3"><span><i class="fa fa-graduation-cap"></i> Students: 200+</span></p>
                            <button type="button" class="btn btn-primary w-100">
                              Read
                              More</button>
                          </div>
                        </div>
                      </div>
                      {/* <!-- End Card with an image on top --> */}

                    </div>
                    <div class="col-lg-3">

                      {/* <!-- Card with an image on top --> */}
                      <div class="card">
                        <img src="./assets/images/course2.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                          <div class="course-box pt-4">
                            <h4>PHP Development Course</h4>
                            <div class="text-muted mb-3">
                              <span class="m-r-10">April 23</span>
                              <a class="course-likes m-l-10" href="#"><i class="bi bi-heart"></i> 654</a>
                            </div>
                            <p class="mb-3"><span><i class="ti-alarm-clock"></i> Duration: 6 Months</span></p>
                            <p class="mb-3"><span><i class="ti-user"></i> Professor: Jane Doe</span></p>
                            <p class="mb-3"><span><i class="fa fa-graduation-cap"></i> Students: 200+</span></p>
                            <button type="button" class="btn btn-primary w-100">
                              Read
                              More</button>
                          </div>
                        </div>
                      </div>
                      {/* <!-- End Card with an image on top --> */}

                    </div>
                    <div class="col-lg-3">

                      {/* <!-- Card with an image on top --> */}
                      <div class="card">
                        <img src="./assets/images/course3.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                          <div class="course-box pt-4">
                            <h4>PHP Development Course</h4>
                            <div class="text-muted mb-3">
                              <span class="m-r-10">April 23</span>
                              <a class="course-likes m-l-10" href="#"><i class="bi bi-heart"></i> 654</a>
                            </div>
                            <p class="mb-3"><span><i class="ti-alarm-clock"></i> Duration: 6 Months</span></p>
                            <p class="mb-3"><span><i class="ti-user"></i> Professor: Jane Doe</span></p>
                            <p class="mb-3"><span><i class="fa fa-graduation-cap"></i> Students: 200+</span></p>
                            <button type="button" class="btn btn-primary w-100">
                              Read
                              More</button>
                          </div>
                        </div>
                      </div>
                      {/* <!-- End Card with an image on top --> */}

                    </div>
                    <div class="col-lg-3">

                      {/* <!-- Card with an image on top --> */}
                      <div class="card">
                        <img src="./assets/images/course4.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                          <div class="course-box pt-4">
                            <h4>PHP Development Course</h4>
                            <div class="text-muted mb-3">
                              <span class="m-r-10">April 23</span>
                              <a class="course-likes m-l-10" href="#"><i class="bi bi-heart"></i> 654</a>
                            </div>
                            <p class="mb-3"><span><i class="ti-alarm-clock"></i> Duration: 6 Months</span></p>
                            <p class="mb-3"><span><i class="ti-user"></i> Professor: Jane Doe</span></p>
                            <p class="mb-3"><span><i class="fa fa-graduation-cap"></i> Students: 200+</span></p>
                            <button type="button" class="btn btn-primary w-100">
                              Read
                              More</button>
                          </div>
                        </div>
                      </div>
                      {/* <!-- End Card with an image on top --> */}

                    </div>
                  </div>
                </div>


                <div class="col-12">
                  <div class="card top-selling overflow-auto">

                    <div class="filter">
                      <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                      <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li class="dropdown-header text-start">
                          <h6>Filter</h6>
                        </li>

                        <li><a class="dropdown-item" href="#">Today</a></li>
                        <li><a class="dropdown-item" href="#">This Month</a></li>
                        <li><a class="dropdown-item" href="#">This Year</a></li>
                      </ul>
                    </div>

                    <div class="card-body pb-0">
                      <h5 class="card-title">Top Selling <span>| Today</span></h5>
                      <div class="input-group mb-3">
                        <input type="text" id="filterInput" class="form-control" placeholder="Filter" />
                        <div class="input-group-append">
                          <span class="input-group-text"><i class="bi bi-filter"></i></span>
                        </div>
                      </div>
                    </div>
                    <table id="myTable" class="table table-striped table-bordered table-hover table-checkable order-column valign-middle dataTable no-footer">
                      <thead>
                        <tr>
                          <th class="sorting" rowspan="1" colspan="1" style={{width: "40px"}}></th>
                          <th class="sortingColumn" rowspan="1" colspan="1"> Roll No <i onclick="sortTable(1)"
                            class="bi bi-sort-up"></i></th>
                          <th class="sortingColumn" rowspan="1" colspan="1"> Name <i onclick="sortTable(2)"
                            class="bi bi-sort-up"></i></th>
                          <th class="sortingColumn" rowspan="1" colspan="1"> Department <i onclick="sortTable(3)"
                            class="bi bi-sort-up"></i></th>
                          <th class="sortingColumn" rowspan="1" colspan="1"> Mobile <i onclick="sortTable(4)"
                            class="bi bi-sort-up"></i></th>
                          <th class="sortingColumn" rowspan="1" colspan="1"> Email <i onclick="sortTable(5)"
                            class="bi bi-sort-up"></i></th>
                          <th class="sortingColumn" rowspan="1" colspan="1">Admission Date <i onclick="sortTable(6)"
                            class="bi bi-sort-up"></i></th>
                          <th class="sortingColumn" rowspan="1" colspan="1"> Action <i onclick="sortTable(7)"
                            class="bi bi-sort-up"></i></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="gradeX odd">
                          <td class="patient-img sorting_1">
                            <img src="./assets/images/user5.jpg" alt="" />
                          </td>
                          <td class="left">23</td>
                          <td>John Deo</td>
                          <td class="left">M.B.B.S.</td>
                          <td><a href="#">
                            444543564 </a></td>
                          <td><a href="#">
                            john@gmail.com </a></td>
                          <td class="left">15 Feb 2012</td>
                          <td>
                            <a href="#" class="tblEditBtn">
                              <i class="bi bi-pencil-fill"></i>
                            </a>
                            <a class="tblDelBtn">
                              <i class="bi bi-trash-fill"></i>
                            </a>
                          </td>
                        </tr>
                        <tr class="gradeX even">
                          <td class="patient-img sorting_1">
                            <img src="./assets/images/user3.jpg" alt="" />
                          </td>
                          <td class="left">23</td>
                          <td>John Deo</td>
                          <td class="left">M.B.B.S.</td>
                          <td><a href="#">
                            444543564 </a></td>
                          <td><a href="#">
                            john@gmail.com </a></td>
                          <td class="left">15 Feb 2012</td>
                          <td>
                            <a href="#" class="tblEditBtn">
                              <i class="bi bi-pencil-fill"></i>
                            </a>
                            <a class="tblDelBtn">
                              <i class="bi bi-trash-fill"></i>
                            </a>
                          </td>
                        </tr>
                        <tr class="gradeX odd">
                          <td class="patient-img sorting_1">
                            <img src="./assets/images/user10.jpg" alt="" />
                          </td>
                          <td class="left">18</td>
                          <td>Rajesh Bhatt</td>
                          <td class="left">Mechanical</td>
                          <td><a href="#">
                            4444565756 </a></td>
                          <td><a href="#">
                            rajesh@gmail.com </a></td>
                          <td class="left">22 Feb 2010</td>
                          <td>
                            <a href="#" class="tblEditBtn">
                              <i class="bi bi-pencil-fill"></i>
                            </a>
                            <a class="tblDelBtn">
                              <i class="bi bi-trash-fill"></i>
                            </a>
                          </td>
                        </tr>
                        <tr class="gradeX even">
                          <td class="patient-img sorting_1">
                            <img src="./assets/images/user4.jpg" alt="" />
                          </td>
                          <td class="left">18</td>
                          <td>Rajesh</td>
                          <td class="left">Civil</td>
                          <td><a href="#">
                            4444565756 </a></td>
                          <td><a href="#">
                            rajesh@gmail.com </a></td>
                          <td class="left">22 Feb 2000</td>
                          <td>
                            <a href="#" class="tblEditBtn">
                              <i class="bi bi-pencil-fill"></i>
                            </a>
                            <a class="tblDelBtn">
                              <i class="bi bi-trash-fill"></i>
                            </a>
                          </td>
                        </tr>
                        <tr class="gradeX odd">
                          <td class="patient-img sorting_1">
                            <img src="./assets/images/user1.jpg" alt="" />
                          </td>
                          <td class="left">18</td>
                          <td>Rajesh Bhatt</td>
                          <td class="left">Mechanical</td>
                          <td><a href="#">
                            4444565756 </a></td>
                          <td><a href="#">
                            rajesh@gmail.com </a></td>
                          <td class="left">22 Feb 2010</td>
                          <td>
                            <a href="#" class="tblEditBtn">
                              <i class="bi bi-pencil-fill"></i>
                            </a>
                            <a class="tblDelBtn">
                              <i class="bi bi-trash-fill"></i>
                            </a>
                          </td>
                        </tr>
                        <tr class="gradeX even">
                          <td class="patient-img sorting_1">
                            <img src="./assets/images/user1.jpg" alt="" />
                          </td>
                          <td class="left">18</td>
                          <td>Rajesh</td>
                          <td class="left">Civil</td>
                          <td><a href="#">
                            4444565756 </a></td>
                          <td><a href="#">
                            rajesh@gmail.com </a></td>
                          <td class="left">22 Feb 2000</td>
                          <td>
                            <a href="#" class="tblEditBtn">
                              <i class="bi bi-pencil-fill"></i>
                            </a>
                            <a class="tblDelBtn">
                              <i class="bi bi-trash-fill"></i>
                            </a>
                          </td>
                        </tr>
                        <tr class="gradeX odd">
                          <td class="patient-img sorting_1">
                            <img src="./assets/images/user2.jpg" alt="" />
                          </td>
                          <td class="left">15</td>
                          <td>Sarah Smith</td>
                          <td class="left">M.C.A.</td>
                          <td><a href="#">
                            44455546456 </a></td>
                          <td><a href="#">
                            sarah@gmail.com </a></td>
                          <td class="left">05 Jun 2011</td>
                          <td>
                            <a href="#" class="tblEditBtn">
                              <i class="bi bi-pencil-fill"></i>
                            </a>
                            <a class="tblDelBtn">
                              <i class="bi bi-trash-fill"></i>
                            </a>
                          </td>
                        </tr>
                        <tr class="gradeX even">
                          <td class="patient-img sorting_1">
                            <img src="./assets/images/user2.jpg" alt="" />
                          </td>
                          <td class="left">15</td>
                          <td>Sarah Smith</td>
                          <td class="left">M.C.A.</td>
                          <td><a href="#">
                            44455546456 </a></td>
                          <td><a href="#">
                            sarah@gmail.com </a></td>
                          <td class="left">05 Jun 2011</td>
                          <td>
                            <a href="#" class="tblEditBtn">
                              <i class="bi bi-pencil-fill"></i>
                            </a>
                            <a class="tblDelBtn">
                              <i class="bi bi-trash-fill"></i>
                            </a>
                          </td>
                        </tr>
                        <tr class="gradeX odd">
                          <td class="patient-img sorting_1">
                            <img src="./assets/images/user5.jpg" alt="" />
                          </td>
                          <td class="left">14</td>
                          <td>Jacob Ryan</td>
                          <td class="left">Music</td>
                          <td><a href="#">
                            444543564 </a></td>
                          <td><a href="#">
                            johnson@gmail.com </a></td>
                          <td class="left">03 Dec 2001</td>
                          <td>
                            <a href="#" class="tblEditBtn">
                              <i class="bi bi-pencil-fill"></i>
                            </a>
                            <a class="tblDelBtn">
                              <i class="bi bi-trash-fill"></i>
                            </a>
                          </td>
                        </tr>
                        <tr class="gradeX even">
                          <td class="patient-img sorting_1">
                            <img src="./assets/images/user5.jpg" alt="" />
                          </td>
                          <td class="left">14</td>
                          <td>Jacob Ryan</td>
                          <td class="left">Music</td>
                          <td><a href="#">
                            444543564 </a></td>
                          <td><a href="#">
                            johnson@gmail.com </a></td>
                          <td class="left">03 Dec 2001</td>
                          <td>
                            <a href="#" class="tblEditBtn">
                              <i class="bi bi-pencil-fill"></i>
                            </a>
                            <a class="tblDelBtn">
                              <i class="bi bi-trash-fill"></i>
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div class="table-pagination">
                      <div class="dataTables_info" role="status" aria-live="polite">Showing 11 to 18 of 18 entries</div>
                      <div class="dataTables_paginate paging_simple_numbers">
                        <ul class="pagination">
                          <li class="paginate_button page-item previous">
                            <a href="javascript:void(0)" aria-controls="example4" data-dt-idx="0" tabindex="0" class="page-link">Previous</a>
                          </li>
                          <li class="paginate_button page-item ">
                            <a href="javascript:void(0)" aria-controls="example4" data-dt-idx="1" tabindex="0" class="page-link">
                              1
                            </a>
                          </li>
                          <li class="paginate_button page-item active">
                            <a href="javascript:void(0)" aria-controls="example4" data-dt-idx="2" tabindex="0" class="page-link">
                              2
                            </a>
                          </li>
                          <li class="paginate_button page-item next disabled" id="example4_next">
                            <a href="javascript:void(0)" aria-controls="example4" data-dt-idx="3" tabindex="0" class="page-link">
                              Next
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main >
    </>
  )
}

export default Homepage;