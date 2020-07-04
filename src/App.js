import React, { Component } from "react";
import Toolbar from "./Components/Toolbar/Toolbar";
import SideDrawer from "./Components/SideDrawer/sideDrawer";
import "./App.css";
import Content from "./Components/Content/content";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import LoginForm from "./Components/loginForm";
import RegisterForm from "./Components/registerForm";
import Users from "./Components/Content/Users/users";
import Posts from "./Components/Content/Posts/posts";
import NotFound from "./Components/notFound";

class App extends Component {
  state = {
    sideDrawerOpen: false,
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
            <Route path="/register/:id" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/not-found" component={NotFound} />
            <Route exact path="/:content">
              <Toolbar drawerClickHandler={this.drawerTogglerClickHandler} />
              <SideDrawer show={this.state.sideDrawerOpen} />
              <Content show={this.state.sideDrawerOpen} />
            </Route>
            <Route path="/users" component={Users} />
            <Route path="/posts" component={Posts} />
            <Redirect from="/" exact to="/users" />
            <Redirect to="/not-found" />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
