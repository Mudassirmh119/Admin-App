import React from "react";
import "./content.css";
import Users from "./users";

const Content = (props) => {
  const classes = props.show ? "main open" : "main";
  return (
    <div className={classes}>
      <div className="container">
        <h1>Hello Worrld</h1>
        <div className="table-responsive">
          <Users />
        </div>
      </div>
    </div>
  );
};

export default Content;
