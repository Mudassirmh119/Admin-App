import React from "react";
import Form from "./Common/form";
import Joi from "joi-browser";
import { saveUser, getUser } from "../Services/userService";

class RegisterForm extends Form {
  state = {
    data: {
      name: "",
      username: "",
      password: "",
      email: "",
      street: "`",
      suite: "",
      city: "",
      phone: "",
      website: "",
    },
    errors: {},
  };

  schema = {
    id: Joi.string(),
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

  componentDidMount() {
    const userId = this.props.match.params.id;
    if (userId === "new") return;

    const user = getUser(userId);
    if (!user) return this.props.history.replace("/not-found");

    this.setState({ data: this.mapToViewModel(user) });
  }

  mapToViewModel(user) {
    return {
      id: user.id,
      name: user.name,
      username: user.username,
      password: "",
      email: user.email,
      street: user.address.street,
      suite: user.address.suite,
      city: user.address.city,
      phone: user.phone,
      website: user.website,
    };
  }

  doSubmit = () => {
    saveUser(this.state.data);
    this.props.history.push("/users");
  };

  render() {
    return (
      <div>
        <h1>User Form</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-9">{this.renderInput("name", "Name")}</div>
          </div>
          <div className="row">
            <div className="col-9">
              {this.renderInput("username", "Username")}
            </div>
          </div>
          <div className="row">
            <div className="col-9">
              {this.renderInput("password", "Password", "password")}
            </div>
          </div>
          <div className="row">
            <div className="col-9">{this.renderInput("email", "Email")}</div>
          </div>
          <div className="row">
            <div className="col-3">{this.renderInput("street", "Street")}</div>
            <div className="col-3">{this.renderInput("suite", "Suite")}</div>
            <div className="col-3">{this.renderInput("city", "City")}</div>
          </div>
          <div className="row">
            <div className="col-9">{this.renderInput("phone", "Phone")}</div>
          </div>
          <div className="row">
            <div className="col-9">
              {this.renderInput("website", "Website")}
            </div>
          </div>
          <div className="row">
            <div className="col-9">{this.renderButton("Register")}</div>
          </div>
        </form>
      </div>
    );
  }
}

export default RegisterForm;
