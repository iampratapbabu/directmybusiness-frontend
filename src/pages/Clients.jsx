import React, { useEffect } from 'react'
import PageTitleAndSnackBar from '../components/common/PageTitleAndSnackBar'
import DataTable from '../components/common/DataTable'
import CommonModal from '../components/common/CommonModal'
import { useLocation } from 'react-router'

const Clients = () => {
    const location = useLocation();
    const pathname = window.location.pathname;


    console.log(location);

    useEffect(()=>{
        console.log(pathname);
    },[])

    return (
        <>

            <PageTitleAndSnackBar pageTitle="Clients" />


            <section class="section dashboard">
            <DataTable />
            </section>

            <CommonModal/>

        </>
    )
}

export default Clients