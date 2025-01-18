import React from 'react';
function Hero() {
    return (
        <div className='container'>
            <div className='row text-center my-5'>
                <div className='col my-4'>
                    <h1>Charges</h1>
                    <h3 className='mt-4 text-muted'>List of all charges and taxes.</h3>
                </div>
            </div>

            <div className='row my-5 text-center'>
                <div className='col-4 p-5'>
                    <img src='media/images/pricingEquity.svg' alt='qituy' />
                    <h3 className='mt-4'>Free equity delivery</h3>
                    <p className='text-muted mt-3 '>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>

                <div className='col-4 p-5'>
                    <img src='media/images/intradayTrades.svg' alt='qituy' />
                    <h3 className='mt-4'>Intraday and F&O trades</h3>
                    <p className='text-muted mt-3 '>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>

                <div className='col-4 p-5'>
                    <img src='media/images/pricingEquity.svg' alt='qituy' />
                    <h3 className='mt-4'>Free direct MF</h3>
                    <p className='text-muted mt-3'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;