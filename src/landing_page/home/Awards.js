import React from 'react';

function Awards() {
    return (
        <div className='container '>
            <div className='row justify-content-center align-items-center'>
                <div
                    className="col-lg-6 col-md-9 text-center p-4"
                    style={{ margin: "0 auto", width: "auto" }}
                >
                    <img
                        src="media/images/largestBroker.svg"
                        alt="awards"
                        className="img-fluid"
                    />
                </div>

                <div className='col-lg-6 p-4 mt-5 col-md-9 mb-5'>
                    <h1>Largest stock broker in India.</h1>
                    <p className='mb-5'>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                    <div className='row'>
                        <div className='col-6'>
                            <ul>
                                <li><p>Equities</p></li>
                                <li><p>Derivatives</p></li>
                                <li><p>Commodities</p></li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li><p>Currency</p></li>
                                <li><p>Bonds</p></li>
                                <li><p>Mutual Funds</p></li>
                            </ul>
                        </div>
                    </div>
                    <img src='media/images/pressLogos.png' style={{ width: "90%" }} alt='below' />
                </div>
            </div>
        </div>
    );
}

export default Awards;