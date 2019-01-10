import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      maxChars: 140
    };
  }

  handleChange = event => {
  this.setState({
    value: event.target.value,
    maxChars: this.state.maxChars - 1
  });
}


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
        type="text"
        value={this.state.value}
        onChange={this.handleChange}/>
        <span>
          <p>{this.state.maxChars}</p>
        </span>
      </div>
    );
  }
}

export default TwitterMessage;
