import React from 'react';
import { useNavigate } from 'react-router-dom';

function OpenAccount() {
    const navigate = useNavigate();

    const handleSignupClick = () => {
        navigate('/signup'); 
    };

    return ( 
        <div className='container text-center p-5'>
            <div className='row justify-content-center align-items-center'>
                <div className='col'>
                    <h1 className='text-center mb-4'>Open a Zerodha account</h1>
                    <p className='text-center mb-4'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                    <button
                        className='btn btn-primary p-2 fs-5 mt-3'
                        style={{ width: "25%", fontSize: "2.2vh" }}
                        onClick={handleSignupClick}
                    >
                        Signup for free
                    </button>
                </div>
            </div>
        </div>
    );
}

export default OpenAccount;
