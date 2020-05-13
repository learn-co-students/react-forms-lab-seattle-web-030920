import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleChange = event => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    let remainingChars = this.props.maxChars - this.state.message.length;
    return (      
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message}
          onChange={this.handleChange}/>
        <span>{remainingChars}</span>
      </div>
    );
  }
}

export default TwitterMessage;
