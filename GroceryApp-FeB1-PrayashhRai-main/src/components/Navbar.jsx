import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const Navbar = () => {
  const navigate = useNavigate();
  const [loginStatus, setLoginStatus] = useState(false);
  const  {numberCart}  = useSelector((state) => state);

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (!token) {
      setLoginStatus(false);
    } else {
      setLoginStatus(true);
    }
  }, [loginStatus]);

  const onLogoutHandler = () => {
    localStorage.clear();
    setLoginStatus(false);
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        Grocery App
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
          <Link className="nav-link" to="/" aria-current="page">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
             <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Product
            </a>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
        <div className="form-inline my-2 my-lg-0">
          <Link className="btn btn-warning">
            Cart <span className="badge badge-dark">{numberCart}</span>
          </Link> || 
          {loginStatus ? (
            <Link className="btn btn-outline-danger" onClick={onLogoutHandler}>
              Logout
            </Link>
          ) : (
            <Link className="btn btn-outline-primary" to="/login">
              Login
            </Link>
          )}

          {/* <Link className="btn btn-primary">Login</Link>
       <Link className="btn btn-danger">Logout</Link> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
