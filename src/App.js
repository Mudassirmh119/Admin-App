import React, { Component } from "react";
import Toolbar from "./Components/Toolbar/Toolbar";
import SideDrawer from "./Components/SideDrawer/sideDrawer";
import "./App.css";
// import BackDrop from "./Components/BackDrop/backDrop";
import Content from "./Components/Content/content";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Posts from "./Components/Content/Posts/posts";
// import Users from "./Components/Content/Users/users";

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
    // const backDrop = this.state.sideDrawerOpen ? (
    //   <BackDrop click={this.handleBackDropClick} />
    // ) : null;

    return (
      <Router>
        <div className="App">
          <Toolbar drawerClickHandler={this.drawerTogglerClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {/* {backDrop} */}
          {/* <Content show={this.state.sideDrawerOpen} /> */}
        </div>
        <Switch>
          <Route
            path="/:content"
            component={() => <Content show={this.state.sideDrawerOpen} />}
          />
          <Route exact path="/" />
        </Switch>
      </Router>
    );
  }
}

export default App;
