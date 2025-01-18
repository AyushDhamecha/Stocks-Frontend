import React from 'react';

function RightSection({ image, title, description }) {
    const handleClick=()=>{
        window.location.href = 'https://stocks-dashoard.vercel.app';
    }
    return (
        <div className='container mb-5'>
            <div className='row align-items-center' onClick={handleClick}style={{ cursor: 'pointer' }}>
                {/* Text Section */}
                <div className='col-lg-4 col-sm-12 mb-4'>
                    <h1 className='mb-3'>{title}</h1>
                    <p className='text-muted' style={{ fontSize: "1.1rem", lineHeight: "1.8rem" }}>
                        {description}
                    </p>
                    <a 
                        href="#" 
                        className="btn btn-link text-primary d-flex align-items-center gap-2 p-0"
                    >
                        Learn more
                        <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </a>
                </div>
                {/* Image Section */}
                <div className='col-lg-8 col-sm-12 d-flex my-5 justify-content-end'>
                    <img src={image} alt="rightimage" className='img-fluid' />
                </div>
            </div>
        </div>
    );
}

export default RightSection;
