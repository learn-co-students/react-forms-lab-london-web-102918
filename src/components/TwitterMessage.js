import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      numOfChars: props.maxChars
    };
  }

  handleChange = (event) => {
    this.setState({
      ...this.state,
      text: event.target.value,
      numOfChars: this.props.maxChars - event.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message: God is good all the time, all the time God is good</strong>
        <input type="text" name='text' value={this.state.text} onChange={event => this.handleChange(event)} />
        <p>
          Character limit: {this.state.numOfChars}
        </p>
      </div>
    );
  }
}

export default TwitterMessage;
