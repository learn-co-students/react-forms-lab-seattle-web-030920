import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: '',
      
    };
  }

  handleChange = event => {
    this.setState({message: event.target.value})
  }

  render() {
    let num = this.props.maxChars - this.state.message.length 
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={event => this.handleChange(event)} name="message" id="message" value={this.state.message} />
        {num}
      </div>
    );
  }
}

export default TwitterMessage;
