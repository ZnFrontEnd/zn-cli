import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AuthorizedRoute from "@/authority/AuthorizedRoute";
import styles from "./index.less";

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Router>
          <AuthorizedRoute />
        </Router>
      </div>
    );
  }
}

export default App;
