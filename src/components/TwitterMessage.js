import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      text: "",
      remaining: props.maxChars
    };
  }

  handleChange=(event)=>{
    this.setState({text: event.target.value,
      remaining: this.state.remaining-event.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange= {this.handleChange} type="text" name="message" id="message" value={this.state.text}/>
      <p>{this.state.remaining}</p>
      </div>
    );
  }
}

export default TwitterMessage;

//  --> 280