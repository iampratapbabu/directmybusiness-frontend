import React from 'react'
import PageTitleAndSnackBar from '../components/common/PageTitleAndSnackBar'
import DataTable from '../components/common/DataTable'
import CommonModal from '../components/common/CommonModal'

const Clients = () => {
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