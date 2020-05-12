import React from "react";

class TwitterMessage extends React.Component {
  // in order to set state with props, you need to pass in props, and then 
  constructor(props) {
    super(); 

    this.state = {
      // maxChars: props.maxChars,
      message: "",
      counter: props.maxChars
    };
  }

  handleChars = (event) => {
    this.setState({
        message: event.target.value,
        counter: this.state.counter - event.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={event => this.handleChars(event)} type="text" name="message" id="message" value={this.state.message}/>
        <div>{this.state.counter}</div>
      </div>
    );
  }
}

export default TwitterMessage;
