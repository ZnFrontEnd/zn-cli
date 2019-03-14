import React from "react";
import { Link } from "react-router-dom";

const Login = () => (
  <div>
    <h2>his is Login</h2>
    <Link to="/">Home</Link>
    &nbsp;
    <Link to="/contact">Contact</Link>
    &nbsp;
    <Link to="/about">About</Link>
  </div>
);

export default Login;
