import React, { Component } from "react";
import Toolbar from "./Components/Toolbar/Toolbar";
import SideDrawer from "./Components/SideDrawer/sideDrawer";
import "./App.css";
import Content from "./Components/Content/content";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import LoginForm from "./Components/loginForm";
import RegisterForm from "./Components/registerForm";

class App extends Component {
  state = {
    sideDrawerOpen: true,
  };

  drawerTogglerClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  handleBackDropClick = () => {
    this.setState({ sideDrawerOpen: !this.state.sideDrawerOpen });
  };

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/:content">
              <Toolbar drawerClickHandler={this.drawerTogglerClickHandler} />
              <SideDrawer show={this.state.sideDrawerOpen} />
              <Content show={this.state.sideDrawerOpen} />
            </Route>
            <Route path="/login" />
            <Route exact path="/">
              {/* <Redirect to="/dashboard" /> */}
              <Link to="/users">
                <button className="btn btn-info btn-lg">Go To Dashboard</button>
              </Link>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
