import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberCharactersRemaining: null
    };
  }

  handleChange = (e) => {
    this.setState({
      numberCharactersRemaining: (this.props.maxChars-e.target.value.length)
    })

  }


  render() {
    return (
      <div>
        
        <strong>Your message:</strong>
        <input name="message" type="text" maxLength={this.props.maxChars} onChange={this.handleChange}/>
        <strong>Chars remaining: {this.state.numberCharactersRemaining}</strong>

      </div>
    );
  }
}

export default TwitterMessage;
