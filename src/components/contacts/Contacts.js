import React, { Component } from "react";
import ContactForm from "./ContactForm";
import { Consumer } from "../../context";

class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;

          return (
            <React.Fragment>
              <h2 className="display-4 mb-4">
                <span className="text-danger">Contacts</span> List
              </h2>
              {contacts.map(contact => (
                <ContactForm
                  id={contact.id}
                  key={contact.id}
                  name={contact.name}
                  username={contact.username}
                  email={contact.email}
                  phone={contact.phone}
                  contact={contact}
                />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}
export default Contacts;
