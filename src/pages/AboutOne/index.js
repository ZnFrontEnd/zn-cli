import React from "react";
import { Link } from "react-router-dom";
import styles from "./index.less";

const AboutOne = () => (
  <div>
    <h2 className={styles.about}>this is AboutOne page</h2>
    <Link to="/">Home</Link>
    &nbsp;
    <Link to="/contact">Contact</Link>
    &nbsp;
    <Link to="/login">Login</Link>
  </div>
);

export default AboutOne;
