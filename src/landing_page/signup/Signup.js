import React from 'react';

function Signup() {
    return (
        <div className="container">
            {/* Center the header and paragraph */}
            <div className="row mt-5 d-flex flex-column align-items-center text-center">
                <h1>Open a free demat and trading account</h1>
                <h4 className="text-muted my-4">
                    Start investing brokerage-free and join a community of 1+ crore investors and traders
                </h4>
            </div>

            {/* Image and other content */}
            <div className="row my-5">
                <div className="col-md-6">
                    <img
                        src="media/images/account_open.png"
                        alt="Open Account"
                        className="img-fluid"
                    />
                </div>
                <div className="col-md-6">
                    <h2>Signup now</h2>
                    <h5 className="text-muted mt-3">Or track your existing application</h5>

                    {/* Authentication Form */}
                    <form className="mt-4">
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Email address
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">
                                Password
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Enter your password"
                                required
                            />
                        </div>
                        <div className="d-flex justify-content-between align-items-center mt-4">
                            <button type="submit" className="btn btn-primary w-50 me-2 mr-3">
                                Continue with Email
                            </button>
                            <button className="btn btn-outline-danger w-50">
                                <i className="bi bi-google me-2"></i> Continue with Google
                            </button>
                        </div>

                    </form>



                    {/* Google Authentication */}

                </div>
            </div>
        </div>
    );
}

export default Signup;
