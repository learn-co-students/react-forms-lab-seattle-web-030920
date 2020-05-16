import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {message: ""};
  }
  handleChange = (event) =>{

    this.setState({message: event.target.value})
  } 

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange ={this.handleChange} type="text" name="message" value = {this.state.message} id="message" />
      <p>Remaining Characters: {280- this.state.message.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
