import React from 'react';

function Footer() {
    return (
        <footer className='border-top' style={{ backgroundColor: "#fbfbfb" }}>
            <div className='container pt-5'>
                <div className='row'>
                    {/* Company Info */}
                    <div className='col-lg-3 col-md-6 col-sm-12 mb-4 text-center text-md-start'>
                        <img src='media/images/logo.svg' alt='Zerodha Logo' style={{ width: '70%' }} />
                        <p className='mt-4 text-muted'>&copy; 2010 - 2024, Zerodha Broking Ltd. All rights reserved.</p>
                        <div className='d-flex justify-content-center justify-content-md-start mt-3'>
                            <a href='#' className='text-muted mx-2' style={{ fontSize: "1.6rem" }}><i className='fab fa-facebook'></i></a>
                            <a href='#' className='text-muted mx-2' style={{ fontSize: "1.6rem" }}><i className='fab fa-instagram'></i></a>
                            <a href='#' className='text-muted mx-2' style={{ fontSize: "1.6rem" }}><i className='fab fa-linkedin'></i></a>
                            <a href='#' className='text-muted mx-2' style={{ fontSize: "1.6rem" }}><i className='fab fa-twitter'></i></a>
                            <a href='#' className='text-muted mx-2' style={{ fontSize: "1.6rem" }}><i className='fab fa-youtube'></i></a>
                        </div>
                    </div>

                    {/* Company Links */}
                    <div className='col-lg-3 col-md-6 col-sm-12 mb-4'>
                        <h5 className='mb-4 text-center text-md-start'>Company</h5>
                        <ul className='list-unstyled text-center text-md-start'>
                            <li><a href='#' className='text-muted'>About</a></li>
                            <li><a href='#' className='text-muted'>Products</a></li>
                            <li><a href='#' className='text-muted'>Pricing</a></li>
                            <li><a href='#' className='text-muted'>Referral programme</a></li>
                            <li><a href='#' className='text-muted'>Careers</a></li>
                            <li><a href='#' className='text-muted'>Zerodha.tech</a></li>
                            <li><a href='#' className='text-muted'>Press & media</a></li>
                            <li><a href='#' className='text-muted'>Zerodha Cares (CSR)</a></li>
                        </ul>
                    </div>

                    {/* Support Links */}
                    <div className='col-lg-3 col-md-6 col-sm-12 mb-4'>
                        <h5 className='mb-4 text-center text-md-start'>Support</h5>
                        <ul className='list-unstyled text-center text-md-start'>
                            <li><a href='#' className='text-muted'>Contact us</a></li>
                            <li><a href='#' className='text-muted'>Support portal</a></li>
                            <li><a href='#' className='text-muted'>Z-Connect blog</a></li>
                            <li><a href='#' className='text-muted'>List of charges</a></li>
                            <li><a href='#' className='text-muted'>Downloads & resources</a></li>
                            <li><a href='#' className='text-muted'>Videos</a></li>
                            <li><a href='#' className='text-muted'>Market overview</a></li>
                            <li><a href='#' className='text-muted'>How to file a complaint?</a></li>
                            <li><a href='#' className='text-muted'>Status of your complaints</a></li>
                        </ul>
                    </div>

                    {/* Account Links */}
                    <div className='col-lg-3 col-md-6 col-sm-12 mb-4'>
                        <h5 className='mb-4 text-center text-md-start'>Account</h5>
                        <ul className='list-unstyled text-center text-md-start'>
                            <li><a href='#' className='text-muted'>Open an account</a></li>
                            <li><a href='#' className='text-muted'>Fund transfer</a></li>
                        </ul>
                    </div>
                </div>

                {/* Disclaimer */}
                <div className='row mt-4'>
                    <p className='text-muted small text-center'>
                        Zerodha Broking Ltd : Member of NSE, BSE & MCX – SEBI Registration no.: INZ000031633...
                        Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF.
                    </p>
                    <p className='text-muted small text-center'>
                    Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
                    </p>
                    <p className='text-muted small text-center'>
                    "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.
                    </p>
                </div>

                {/* Links Row */}
                <div className="row">
                    <ul className="d-flex flex-wrap list-unstyled justify-content-center mt-4">
                        <li className="mx-3 text-muted font-weight-bold">NSE</li>
                        <li className="mx-3 text-muted font-weight-bold">BSE</li>
                        <li className="mx-3 text-muted font-weight-bold">MCX</li>
                        <li className="mx-3 text-muted font-weight-bold">Terms & conditions</li>
                        <li className="mx-3 text-muted font-weight-bold">Policies & procedures</li>
                        <li className="mx-3 text-muted font-weight-bold">Privacy policy</li>
                        <li className="mx-3 text-muted font-weight-bold">Disclosure</li>
                        <li className="mx-3 text-muted font-weight-bold">For investor's attention</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
