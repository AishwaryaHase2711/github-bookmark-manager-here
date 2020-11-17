import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import Route from "react-router-dom/Route";
import Repo from "./Repo";
import "./App.css";

// https://api.github.com/search/repositories?q=html
function App() {
  let message = "";
  return (
    <Router>
      <div className="container">
        <Route
          path="/github-bookmark-manager-here/"
          exact
          strict
          render={() => {
            return (
              <div>
                <br />
                <br />
                <h1 className="heading">Github-Bookmark-Manager</h1>
                <br />
                <Link className="repo" to="/github-bookmark-manager-here/repo/">
                  Add Repositories to Manager
                </Link>
                <h1 className="loading">{message}</h1>
              </div>
            );
          }}
        />
        <Route
          path="/github-bookmark-manager-here/repo/"
          exact
          strict
          render={() => {
            return <Repo />;
          }}
        />
      </div>
    </Router>
  );
}

export default App;
