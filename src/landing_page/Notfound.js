import React from 'react';

function Notfound() {
    return ( 
        <div className='container text-center p-5'>
            <div className='row justify-content-center align-items-center'>
                <div className='col'>
                    <h1 className='text-center mb-4'>404 Not Found</h1>
                    <p className='text-center mb-4'>Sorry the page you're looking for does not exist.</p>
                </div>
            </div>
        </div>
     );
}

export default Notfound;