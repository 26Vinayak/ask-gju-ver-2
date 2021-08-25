import React, { useEffect } from "react";
import "./App.css";
import Login from "./components/auth/Login";
import Quora from "./components/Quora";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function App() {
  const user = null;
  let history = useHistory();

  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <Switch>
            <Route exact path="/quora" component={Quora} />
            <Route exact path="/">
              <h1>Home </h1>
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
