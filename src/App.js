import React, { Component } from "react";
import Toolbar from "./Components/Toolbar/Toolbar";
import SideDrawer from "./Components/SideDrawer/sideDrawer";
import "./App.css";
import BackDrop from "./Components/BackDrop/backDrop";
import Content from "./Components/Content/content";
import UsersTable from "./Components/Content/usersTable";

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
      <div className="App">
        <Toolbar drawerClickHandler={this.drawerTogglerClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {/* {backDrop} */}
        <Content show={this.state.sideDrawerOpen} />
      </div>
    );
  }
}

export default App;
