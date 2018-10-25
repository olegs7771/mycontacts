import React, { Component } from "react";

class AddContact extends Component {
  constructor(props) {
    super(props);

    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
  }

  onSubmit = e => {
    e.preventDefault();
    const contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value
    };
    console.log(contact);
  };

  static defaultProps = {
    name: "Alice Smith",
    email: "alice@gmail.com",
    phone: "333-333-333"
  };

  render() {
    const { name, email, phone } = this.props;

    return (
      <div>
        <div className="card mb-3 ">
          <div className="card-header text-center">
            <b>Add Contact</b>
          </div>
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text "
                  name="name"
                  className="form-control form-control-lg"
                  placeholder="Enter Name..."
                  defaultValue={name}
                  ref={this.nameInput}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">email</label>
                <input
                  type="email "
                  name="email"
                  className="form-control form-control-lg"
                  placeholder="Enter Email..."
                  defaultValue={email}
                  ref={this.emailInput}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Phone</label>
                <input
                  type="text "
                  name="phone"
                  className="form-control form-control-lg"
                  placeholder="Enter Phone..."
                  defaultValue={phone}
                  ref={this.phoneInput}
                />
              </div>
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
  }
}
export default AddContact;
