import React, { Component } from "react";
import { Consumer } from "../../context";
import TextInputGroup from "../layout/TextInputGroup";
import axios from "axios";

class EditContact extends Component {
  state = {
    name: "",
    email: "",
    username: "",
    phone: "",

    errors: {}
  };
  async componentDidMount() {
    const { id } = this.props.match.params;

    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const contact = res.data;
    const { name, email, username, phone } = contact;
    this.setState({
      name,
      email,
      username,
      phone
    });
  }

  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    const { name, email, username, phone } = this.state;
    // Checking for Errors
    if (name === "") {
      this.setState({
        errors: { name: "Name is required" }
      });
      return;
    }
    if (email === "") {
      this.setState({
        errors: { email: "email is required" }
      });
      return;
    }
    if (username === "") {
      this.setState({
        errors: { username: "username is required" }
      });
      return;
    }
    const updContact = {
      //this object sending to server
      name,
      email,
      phone
    };

    const { id } = this.props.match.params;
    const res = await axios.put(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      updContact
    );
    dispatch({
      type: "UPDATE_CONTACT",
      payload: res.data
    });

    //clear the state
    this.setState({
      name: "",
      email: "",
      username: "",
      phone: "",
      errors: {}
    });
    this.props.history.push("/");
  };

  onChangeName = e => this.setState({ name: e.target.value });
  onChangeEmail = e => this.setState({ email: e.target.value });
  onChangeUsername = e => this.setState({ username: e.target.value });
  onChangePhone = e => this.setState({ phone: e.target.value });

  render() {
    const { name, email, username, phone, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div>
              <div className="card mb-3 ">
                <div className="card-header text-center">
                  <b className="lead">Edit Contact</b>
                </div>
                <div className="card-body">
                  <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                    <TextInputGroup
                      label="Name"
                      name="name"
                      placeholder="Enter Name..."
                      value={name}
                      onChange={this.onChangeName}
                      error={errors.name}
                    />
                    <TextInputGroup
                      label="email"
                      name="email"
                      placeholder="Enter email..."
                      value={email}
                      onChange={this.onChangeEmail}
                      error={errors.email}
                    />
                    <TextInputGroup
                      label="username"
                      name="username"
                      placeholder="Enter username..."
                      value={username}
                      onChange={this.onChangeUsername}
                      error={errors.username}
                    />
                    <TextInputGroup
                      label="phone"
                      name="phone"
                      placeholder="Enter phone..."
                      value={phone}
                      onChange={this.onChangePhone}
                      error={errors.phone}
                    />

                    <input
                      type="submit"
                      value="Edit Contact"
                      className="btn btn-light btn-block"
                    />
                  </form>
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default EditContact;
