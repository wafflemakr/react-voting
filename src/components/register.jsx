import React, { Component } from "react";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      name: ""
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.onRegister(this.state.value);
  };

  handleIDChange = e => {
    e.preventDefault();
    this.setState({ value: e.target.value });
  };

  handleNameChange = e => {
    e.preventDefault();
    this.setState({ name: e.target.value });
  };

  render() {
    return (
      <div>
        <p className="m-5" hidden={!this.props.connected}>
          Register Your ID and Address for voting approval
        </p>
        <form className="text-center" onSubmit={this.handleSubmit}>
          <div>
            <label>ID: </label>
            <input
              type="text"
              placeholder="Enter your ID"
              onChange={this.handleIDChange}
            />
          </div>
          <div>
            <label>NAME: </label>
            <input
              type="text"
              placeholder="Enter your Name"
              onChange={this.handleNameChange}
            />
          </div>
          <input type="submit" value="Send" />
        </form>
      </div>
    );
  }
}

export default Register;
