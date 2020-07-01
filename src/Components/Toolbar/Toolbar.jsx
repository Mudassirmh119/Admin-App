import React, { Component } from "react";
import "./Toolbar.css";

class Toolbar extends Component {
  state = {
    rotate: false,
    hover: false,
  };

  handleRotate = () => {
    this.setState({ rotate: true });
    setTimeout(
      function () {
        this.setState({ rotate: false, hover: false });
      }.bind(this),
      1000
    );
  };

  toggleHover = () => {
    this.setState({ hover: !this.state.hover });
  };

  render() {
    const style = this.state.hover ? "#8f8f8f" : "white";
    const rotateIcon = this.state.rotate ? (
      <li>
        <div class="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </li>
    ) : (
      <li>
        <a
          onClick={this.handleRotate}
          style={{ color: style, cursor: "pointer" }}
          onMouseEnter={this.toggleHover}
          onMouseLeave={this.toggleHover}
        >
          <span className="fa fa-repeat" />
        </a>
      </li>
    );

    return (
      <header className="toolbar">
        <nav className="toolbar-navigation">
          <div>
            <a onClick={this.props.drawerClickHandler}>
              <span className="fa fa-bars fa-lg "></span>
            </a>
          </div>
          <div className="toolbar-logo">
            <a href="/">THE LOGO</a>
          </div>

          <div className="spacer" />

          <div className="toolbar-navigation-items">
            <ul>
              {rotateIcon}
              <li>
                <a href="/">
                  <span className="fa fa-user-circle" />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Toolbar;
