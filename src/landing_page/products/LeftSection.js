import React from 'react';

function LeftSection({ image, title, description, trydemo, learnmore, googleplay, appstore }) {
    const handleClick=()=>{
        window.location.href = 'https://stocks-dashoard.vercel.app';
    }
    return (
        <div className='container mb-5'>
            <div className='row' onClick={handleClick}style={{ cursor: 'pointer' }}>
                {/* Image Column */}
                <div className='col-lg-8 col-sm-12 my-5 order-1 order-lg-0'>
                    <img src={image} alt="leftimage" className='img-fluid' />
                </div>

                {/* Text Column */}
                <div className='col-lg-4 col-sm-12 my-5 order-0 order-lg-1' >
                    <h1 className='my-4'>{title}</h1>
                    <p className='text-muted' style={{ fontSize: "1.2rem", lineHeight: "2.2rem" }}>{description}</p>
                    <div className='d-flex gap-4 mb-4'>
                        <a href={learnmore} className="btn btn-link text-primary d-flex align-items-center gap-2 p-0 mr-5">
                            Learn more
                            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </a>
                        <a href={trydemo} className="btn btn-link text-primary d-flex align-items-center gap-2 p-0">
                            Try demo
                            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </a>
                    </div>

                    <div className='d-flex gap-3'>
                        <a href={googleplay} className='mr-3 w-0' target='_blank' rel="noopener noreferrer">
                            <img src='media/images/googlePlayBadge.svg' alt='gplay' className='img-fluid' style={{ maxHeight: '50px' }} />
                        </a>
                        <a href={appstore} target='_blank' rel="noopener noreferrer">
                            <img src='media/images/appstoreBadge.svg' alt='appstore' className='img-fluid' style={{ maxHeight: '50px' }} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;
