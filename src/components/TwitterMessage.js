import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();
    this.state = {maxChars: props.maxChars, content: ""};
  }

  charCount = (event) => {
    this.setState({content: event.target.value})
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.charCount} value={this.state.content} />
        <p>{this.state.maxChars - this.state.content.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
