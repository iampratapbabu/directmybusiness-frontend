import React from 'react';
import { Link} from 'react-router-dom';

const PageTitleAndSnackBar = ({pageTitle}) => {

    return (
        <>
            <div class="pagetitle">
                <h1>{pageTitle}</h1>
                <nav>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li class="breadcrumb-item active">{pageTitle}</li>
                    </ol>
                </nav>
            </div>

        </>
    )
}

export default PageTitleAndSnackBar;