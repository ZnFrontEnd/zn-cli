import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import AuthorizedRoute from "@/authority/AuthorizedRoute";
import styles from "./index.less";

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <BrowserRouter>
          <AuthorizedRoute />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
