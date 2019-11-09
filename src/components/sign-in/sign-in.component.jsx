import React from "react";

import "./sign-in.styles.scss";

class SignIn extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      email: "",
      password: ""
    });
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            name="email"
            value={this.state.email}
            required
            onChange={this.handleChange}
            id="sign-in-email"
          />
          <label htmlFor="sign-in-email">Email</label>

          <input
            type="password"
            name="password"
            onChange={this.handleChange}
            value={this.state.password}
            required
            id="sign-in-pass"
          />
          <label htmlFor="sign-in-pass">Password</label>

          <input type="submit" value="Submit Form" />
        </form>
      </div>
    );
  }
}

export default SignIn;
