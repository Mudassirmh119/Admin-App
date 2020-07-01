import React from "react";
import Joi from "joi-browser";
import Form from "./Common/form";
import { Link } from "react-router-dom";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  // username = React.createRef();

  //   componentDidMount() {
  //     this.username.current.focus();
  //   }

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = () => {
    window.location = "/users";
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
        <Link to="/register">
          <button className="btn btn-primary" style={{ marginTop: "10px" }}>
            Register
          </button>
        </Link>
      </div>
    );
  }
}

export default LoginForm;
