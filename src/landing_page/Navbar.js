import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg border-bottom" style={{ backgroundColor: "#FFF" }}>
            <div className="container p-3">
                <Link className="navbar-brand" to={"/"}>
                    <img
                        src="media/images/logo.svg"
                        style={{ width: "25%" }}
                        alt="Logo"
                    />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="d-flex" role="search">
                        <ul className="navbar-nav mb-lg-0">
                            <li className="nav-item mx-3">
                                <Link className="nav-link active" to="/signup" style={{ fontSize: "1.05rem", color: "#797979" }}>
                                    Signup
                                </Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="nav-link active" to="/about" style={{ fontSize: "1.05rem", color: "#797979" }}>
                                    About
                                </Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="nav-link active" to="/product" style={{ fontSize: "1.05rem", color: "#797979" }}>
                                    Product
                                </Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="nav-link active" to="/pricing" style={{ fontSize: "1.05rem", color: "#797979" }}>
                                    Pricing
                                </Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="nav-link active" to="/support" style={{ fontSize: "1.05rem", color: "#797979" }}>
                                    Support
                                </Link>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
