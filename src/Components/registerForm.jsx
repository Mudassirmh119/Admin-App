import React from "react";
import Form from "./Common/form";
import Joi from "joi-browser";
import { saveUser } from "../Services/userService";

class RegisterForm extends Form {
  state = {
    data: {
      name: "",
      username: "",
      password: "",
      email: "",
      street: "",
      suite: "",
      city: "",
      phone: "",
      website: "",
    },
    errors: {},
  };

  schema = {
    name: Joi.string().required().label("Name"),
    username: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().min(5).required().label("Password"),
    email: Joi.string().email().required().label("Email"),
    street: Joi.string().required().label("Street"),
    suite: Joi.string().required().label("Suite"),
    city: Joi.string().required().label("City"),
    phone: Joi.number().integer().required().label("Phone"),
    website: Joi.string().label("Website"),
  };

  doSubmit = () => {
    saveUser(this.state.data);
    this.props.history.push("/users");
  };

  render() {
    return (
      <div>
        <h1>User Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("name", "Name")}
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("email", "Email")}
          <div className="row">
            <div className="col-3">{this.renderInput("street", "Street")}</div>
            <div className="col-3">{this.renderInput("suite", "Suite")}</div>
            <div className="col-3">{this.renderInput("city", "City")}</div>
          </div>
          {this.renderInput("phone", "Phone")}
          {this.renderInput("website", "Website")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
