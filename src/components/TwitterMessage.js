import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      remainingChars: 140,
      charCount: ''
    };
  }

  changeChars = (event) => {
    this.setState({
      charCount: event.target.value,
      remainingChars: this.props.maxChars - event.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Tweet: </strong>
        <input type="text" onChange={(event) => this.changeChars(event)} value={this.state.charCount}/>
        <p> You have {this.state.remainingChars} left </p>
      </div>
    );
  }
}

export default TwitterMessage;
