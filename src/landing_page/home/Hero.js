import React from 'react';
import { useNavigate } from 'react-router-dom';

function Hero() {
    const navigate = useNavigate();

    const handleSignupClick = () => {
        navigate('/signup'); // This will navigate to the '/signup' route
    };

    return (
        <div className='container p-5 text-center mb-4'>
            <div className='row'>
                <div className='col-12'>
                    <img
                        src='media/images/homeHero.png'
                        alt='Hero Section'
                        className='img-fluid mb-5'
                        style={{ width: '100%', height: 'auto' }}
                    />
                    <h1 className='mb-3'>Invest in everything</h1>
                    <p className='mb-4'>
                        Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
                    </p>
                    <button
                        className='btn btn-primary p-2 fs-5 mt-3 mb-3'
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

export default Hero;
