import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Consumer } from "../../context";
import axios from "axios";

class ContactForm extends Component {
  state = {
    showContactInfo: true
  };

  onDeleteClick = async (id, dispatch) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);

    dispatch({
      type: "DELETE_CONTACT",
      payload: id
    });
  };

  render() {
    const { id, name, username, email, phone } = this.props;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;

          return (
            <div className="card card-body mb-3">
              {showContactInfo ? (
                <h4>
                  {name}

                  <i
                    onClick={() =>
                      this.setState({
                        showContactInfo: !this.state.showContactInfo
                      })
                    }
                    className="fas fa-sort-down ml-3"
                    style={{ cursor: "pointer" }}
                  />
                  <i
                    className="fas fa-times"
                    style={{ cursor: "pointer", float: "right", color: "red" }}
                    onClick={this.onDeleteClick.bind(this, id, dispatch)}
                  />
                  <Link to={`/contact/edit/${id}`}>
                    <i
                      className="fas fa-user-edit mr-4"
                      style={{
                        cursor: "pointer",
                        float: "right",
                        color: "black"
                      }}
                    />
                  </Link>
                </h4>
              ) : (
                <h4>
                  {name}
                  <i
                    onClick={() =>
                      this.setState({
                        showContactInfo: !this.state.showContactInfo
                      })
                    }
                    className="fas fa-sort-up ml-3"
                    style={{ cursor: "pointer" }}
                  />
                  <i
                    className="fas fa-times"
                    style={{ cursor: "pointer", float: "right", color: "red" }}
                    onClick={this.onDeleteClick.bind(this, id, dispatch)}
                  />
                  <Link to={`/contact/edit/${id}`}>
                    <i
                      className="fas fa-user-edit mr-4"
                      style={{ cursor: "pointer", float: "right" }}
                      onClick={this.editContact}
                    />
                  </Link>
                </h4>
              )}

              {!showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">
                    <h5>
                      Id:
                      {id}
                    </h5>
                  </li>
                  <li className="list-group-item">
                    <h4>
                      username:
                      {username}
                    </h4>
                  </li>
                  <li className="list-group-item">
                    <h4>
                      email:
                      {email}
                    </h4>
                  </li>
                  <li className="list-group-item">
                    <h4>
                      phone:
                      {phone}
                    </h4>
                  </li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

ContactForm.propTypes = {
  // contact: PropTypes.string.isRequired
  contact: PropTypes.object.isRequired
};
export default ContactForm;
