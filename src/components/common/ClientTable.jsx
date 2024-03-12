import React from 'react'

const ClientTable = ({clientsArr}) => {
  return (
   <>
      <>
            <div className="row">
                <div className="col-lg-12">
                    <div className="row">
                        <div className="col-12">
                            <div className="card top-selling overflow-auto">

                                <div className="card-body pb-0">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <h5 className="card-title">Total Clients : <span>{clientsArr.length} </span></h5>
                                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#basicModal"><i className="bi bi-plus"></i> Add</button>
                                    </div>
                                    <table id="myTable" className="table table-striped table-bordered table-hover table-checkable order-column valign-middle dataTable no-footer">
                                        <thead>
                                            <tr>
                                                <th className="sorting" rowspan="1" colspan="1" style={{ width: "40px" }}></th>
                                                <th className="sortingColumn" rowspan="1" colspan="1"> Name <i onclick="sortTable(2)"
                                                    className="bi bi-sort-up"></i></th>
                                                <th className="sortingColumn" rowspan="1" colspan="1"> Mobile <i onclick="sortTable(4)"
                                                    className="bi bi-sort-up"></i></th>
                                                <th className="sortingColumn" rowspan="1" colspan="1"> Email <i onclick="sortTable(5)"
                                                    className="bi bi-sort-up"></i></th>
                                                <th className="sortingColumn" rowspan="1" colspan="1">Address <i onclick="sortTable(6)"
                                                    className="bi bi-sort-up"></i></th>
                                                <th className="sortingColumn" rowspan="1" colspan="1"> Action <i onclick="sortTable(7)"
                                                    className="bi bi-sort-up"></i></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                clientsArr && clientsArr.map((client,idx)=>{
                                                    return (
                                                        <tr className="gradeX odd">
                                                        <td className="patient-img sorting_1">
                                                            <img src="./assets/images/user5.jpg" alt="" />
                                                        </td>
                                                     
                                                        <td>{client?.clientname}</td>
                                                        <td><a href="#">
                                                            {client?.mobile} </a></td>
                                                        <td><a href="#">
                                                            john@gmail.com </a></td>
                                                        <td className="left">{client?.address1},{client?.address2}</td>
                                                        <td>
                                                            <a href="#" className="tblEditBtn">
                                                                <i className="bi bi-pencil-fill"></i>
                                                            </a>
                                                            <a className="tblDelBtn">
                                                                <i className="bi bi-trash-fill"></i>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    )
                                                })
                                            }
                                    
                                       
                                        </tbody>
                                    </table>
                                    <div className="table-pagination">
                                        <div className="dataTables_info" role="status" aria-live="polite">Showing 11 to 18 of 18 entries</div>
                                        <div className="dataTables_paginate paging_simple_numbers">
                                            <ul className="pagination">
                                                <li className="paginate_button page-item previous">
                                                    <a href="javascript:void(0)" aria-controls="example4" data-dt-idx="0" tabindex="0" className="page-link">Previous</a>
                                                </li>
                                                <li className="paginate_button page-item ">
                                                    <a href="javascript:void(0)" aria-controls="example4" data-dt-idx="1" tabindex="0" className="page-link">
                                                        1
                                                    </a>
                                                </li>
                                                <li className="paginate_button page-item active">
                                                    <a href="javascript:void(0)" aria-controls="example4" data-dt-idx="2" tabindex="0" className="page-link">
                                                        2
                                                    </a>
                                                </li>
                                                <li className="paginate_button page-item next disabled" id="example4_next">
                                                    <a href="javascript:void(0)" aria-controls="example4" data-dt-idx="3" tabindex="0" className="page-link">
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
   </>
  )
}

export default ClientTable