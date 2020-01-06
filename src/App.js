import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Form from "./components/home/Form";

function App() {
  const user = JSON.parse(localStorage.getItem("login"));
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/login" />}></Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/form">
            <Form />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
