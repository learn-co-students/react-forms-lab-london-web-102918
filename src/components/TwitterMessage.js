import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      twitterMessage: '',
      remainingChars: 140
    };
  }

  handleChange = (event) => {
    this.setState(
      { ...this.state,
        twitterMessage: event.target.value,
        remainingChars: this.props.maxChars - event.target.value.length
      }
    )
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.twitterMessage}/>
        <p>Remaining characters: {this.state.remainingChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
