import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;

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
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/login",
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
    });
  };

  return (
    <div className="container mx-auto">
      <div className="row mt-5 d-flex flex-column align-items-center text-center">
        <h1>Login to your account</h1>
        <h4 className="text-muted my-4">
          Access your investment account and join our growing community.
        </h4>
      </div>

      <div className="row my-5">
        <div className="col-md-6">
          <img
            src="media/images/account_open.png"
            alt="Login"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h2>Login now</h2>
          <h5 className="text-muted mt-3">Enter your details to continue</h5>

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
                Login
              </button>
              <button className="btn btn-outline-danger w-50 ml-3">
                <i className="bi bi-google me-2"></i> Login with Google
              </button>
            </div>
            <span className="d-block mt-3">
              Don't have an account? <Link to="/signup">Signup</Link>
            </span>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Login;
