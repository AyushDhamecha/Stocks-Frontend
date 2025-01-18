import React from 'react';

function Education() {
    return (
        <div className='container'>
            <div className='row justify-content-center align-items-center'>
                <div
                    className="col-lg-6 col-md-9 text-center p-4 my-5"
                    style={{ margin: "0 auto", width: "auto" }}
                >
                    <img
                        src="media/images/education.svg"
                        alt="awards"
                        className="img-fluid"
                    />
                </div>

                <div className="col-6 my-5">
                    <h1 className="mb-3 fs-2">Free and open market education</h1>
                    <p>
                        Varsity, the largest online stock market education book in the world
                        covering everything from the basics to advanced trading.
                    </p>
                    <a href="" style={{ textDecoration: "none" }}>
                        Versity <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </a>
                    <p className="mt-5">
                        TradingQ&A, the most active trading and investment community in
                        India for all your market related queries.
                    </p>
                    <a href="" style={{ textDecoration: "none" }}>
                        TradingQ&A <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Education;