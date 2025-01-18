import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/signup",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      email: "",
      password: "",
      username: "",
    });
  };

  return (
    <div className="container mx-auto">
      <div className="row mt-5 d-flex flex-column align-items-center text-center">
        <h1>Open a free demat and trading account</h1>
        <h4 className="text-muted my-4">
          Start investing brokerage-free and join a community of 1+ crore investors and traders
        </h4>
      </div>

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

          <form onSubmit={handleSubmit} className="mt-4">
            <div className="mb-2">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={email}
                placeholder="Enter your email"
                onChange={handleOnChange}
                required
              />
            </div>
            <div className="mb-2">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                name="username"
                value={username}
                placeholder="Enter your username"
                onChange={handleOnChange}
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
                name="password"
                value={password}
                placeholder="Enter your password"
                onChange={handleOnChange}
                required
              />
            </div>
            <div className="d-flex justify-content-between align-items-center mt-4">
              <button type="submit" className="btn btn-primary w-50 me-2">
                Continue with Email
              </button>
              <button className="btn btn-outline-danger w-50 ml-3">
                <i className="bi bi-google me-2"></i> Continue with Google
              </button>
            </div>
            <span className="d-block mt-3">
              Already have an account? <Link to="/login">Login</Link>
            </span>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Signup;
