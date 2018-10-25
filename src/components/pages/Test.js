import React, { Component } from "react";

export default class Test extends Component {
  state = {
    id: "",
    title: "",
    userId: ""
  };

  componentDidMount() {
    // const { id, title, userId } = this.state;
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => response.json())
      .then(data =>
        this.setState({
          id: data.id,
          title: data.title,
          userId: data.userId
        })
      );
  }

  render() {
    console.log(this.state);
    const { id, title, userId } = this.state;
    return (
      <div>
        <h1>this state</h1>
        <ul>
          <li>
            id:
            {id}
          </li>
          <li>
            title:
            {title}
          </li>
          <li>
            userId:
            {userId}
          </li>
        </ul>
      </div>
    );
  }
}
