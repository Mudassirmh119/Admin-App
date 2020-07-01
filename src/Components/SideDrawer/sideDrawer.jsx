import React from "react";
import "./sideDrawer.css";

const SideDrawer = (props) => {
  const drawerClasses = props.show ? "side-drawer open" : "side-drawer";
  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <a href="/">
            <span className="fa fa-list-ul " />
            Users
          </a>
        </li>
        <li>
          <a href="/">
            <span className="fa fa-list-ul " />
            Posts
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SideDrawer;
