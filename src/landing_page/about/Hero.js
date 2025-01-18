import React from 'react';

function Hero() {
    return (
        <div className='container'>
            <div className='row my-5 align-items-center justify-content-center '>
                <h1 className='mt-5' style={{ fontSize: "2.3rem" }}>We pioneered the discount broking model in India.</h1>
                <h1 className='mb-5' style={{ fontSize: "2.3rem" }}>Now, we are breaking ground with our technology.</h1>
            </div>
            <div className='border-bottom mb-5'></div>
            <div className='row'>
                <div className='col mt-5 ml-5 text-dark' style={{fontSize:"1.2rem",lineHeight:"1.7"}}>
                    <p>We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.</p>

                    <p>Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.</p>

                    <p>Over 1+ Crore clients place millions of orders every day through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.</p>
                </div>
                <div className='col mt-5 mr-5 text-dark'  style={{fontSize:"1.2rem",lineHeight:"1.7"}}>
                    <p>In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.</p>
                    <p>Rainmatter, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.</p>
                    <p>And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us.</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;