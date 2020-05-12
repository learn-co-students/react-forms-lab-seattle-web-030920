import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {username: "", password: ""};
  }

  handleUsername = (event) => {
    this.setState(
      {
        username: event.target.value
      }
    )
  }

  handlePassword = (event) => {
    this.setState(
      {
        password: event.target.value
      }
    )
  }

  handleBullshit = (event) => {
    event.preventDefault()
    if (this.state.username === "" || this.state.password === "") {
      console.log("Gotta type something in here")
    } else {
      this.props.handleLogin({username: this.state.username, password: this.state.password})
    }
  }

  render() {
    return (
      <form onSubmit={this.handleBullshit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleUsername}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.handlePassword}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
