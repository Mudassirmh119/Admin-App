import React from "react";
import "./content.css";
import Users from "./Users/users";
import { useParams } from "react-router-dom";
import Posts from "./Posts/posts";

const getContent = (content) => {
  if (content === "posts") return <Posts />;
  else if (content === "users") return <Users />;
};

const Content = (props) => {
  const { content: contentToShow } = useParams();
  const classes = props.show ? "main open" : "main";
  const table = getContent(contentToShow);

  return (
    <div className={classes}>
      <div className="container">
        <h1>{contentToShow}</h1>
        <div className="table-responsive">{table}</div>
      </div>
    </div>
  );
};

export default Content;
