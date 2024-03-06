import React from 'react'
import PageTitleAndSnackBar from '../components/common/PageTitleAndSnackBar'
import DataTable from '../components/common/DataTable'
import CommonModal from '../components/common/CommonModal'

const Revenue = () => {
    return (
        <>

            <PageTitleAndSnackBar pageTitle="Revenue" />

            <section class="section dashboard">
                <DataTable />
            </section>

            <CommonModal />
            
        </>
    )
}

export default Revenue