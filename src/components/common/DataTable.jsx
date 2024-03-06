import React from 'react'

const DataTable = () => {
    return (
        <>
            <div class="row">
                <div class="col-lg-12">
                    <div class="row">
                        <div class="col-12">
                            <div class="card top-selling overflow-auto">

                                <div class="card-body pb-0">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <h5 class="card-title">Top Selling <span>| Today</span></h5>
                                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#basicModal"><i class="bi bi-plus"></i> Add</button>
                                    </div>
                                    <table id="myTable" class="table table-striped table-bordered table-hover table-checkable order-column valign-middle dataTable no-footer">
                                        <thead>
                                            <tr>
                                                <th class="sorting" rowspan="1" colspan="1" style={{ width: "40px" }}></th>
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
            </div>
        </>
    )
}

export default DataTable;