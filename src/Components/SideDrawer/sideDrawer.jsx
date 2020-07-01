import React from "react";
import "./sideDrawer.css";
import { Link } from "react-router-dom";

const SideDrawer = (props) => {
  const drawerClasses = props.show ? "side-drawer open" : "side-drawer";
  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <Link to="/users">
            <span className="fa fa-list-ul " />
            Users
          </Link>
        </li>
        <li>
          <Link to="/posts">
            <span className="fa fa-list-ul " />
            Posts
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideDrawer;
