import React, { Component } from "react";

class Register extends Component {
  state = {
    value: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onRegister(this.state.value);
  };

  render() {
    return (
      <div className="m-5">
        <p hidden={!this.props.connected}>
          Enter your ID to register it as well as your ethereum Address for
          voting approval
        </p>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Enter your ID"
              onChange={e => this.setState({ value: e.target.value })}
              value={this.state.value}
            />
            <input type="submit" value="Send" />
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
