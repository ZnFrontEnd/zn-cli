import React from "react";
import { Link } from "react-router-dom";

const Contact = () => (
  <div>
    <h2>this is Contact</h2>
    <Link to="/about">About</Link>
    &nbsp;
    <Link to="/">Home</Link>
    &nbsp;
    <Link to="/login">Login</Link>
  </div>
);

export default Contact;
