import React, { Component } from "react";
import { Consumer } from "../../context";
import TextInputGroup from "../layout/TextInputGroup";
import axios from "axios";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    username: "",
    errors: {}
  };

  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    const { name, email, username } = this.state;
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

    const newContact = {
      name,
      email,
      username
    };

    const res = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      newContact
    );
    dispatch({
      type: "ADD_CONTACT",
      payload: res.data
    });

    //clear the state
    this.setState({
      name: "",
      email: "",
      username: "",
      errors: {}
    });
    this.props.history.push("/");
  };

  onChangeName = e => this.setState({ name: e.target.value });
  onChangeemail = e => this.setState({ email: e.target.value });
  onChangeusername = e => this.setState({ username: e.target.value });

  render() {
    const { name, email, username, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value; //value coming from provider in context
          return (
            <div>
              <div className="card mb-3 ">
                <div className="card-header text-center">
                  <b>Add Contact</b>
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
                      onChange={this.onChangeemail}
                      error={errors.email}
                    />
                    <TextInputGroup
                      label="username"
                      name="username"
                      placeholder="Enter username..."
                      value={username}
                      onChange={this.onChangeusername}
                      error={errors.username}
                    />

                    <input
                      type="submit"
                      value="Add Contact"
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
export default AddContact;
