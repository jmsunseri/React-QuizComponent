import React, { Component } from "react";

class QuizQuestionButton extends Component {
  constructor(props) {
    super();
    this.state = {
      buttonText: props.button_text
    };
  }

  render() {
    return (
      <li>
        <button>{this.state.buttonText}</button>
      </li>
    );
  }

  componentDidMount() {
    this.setState({
      someKey: "otherValue"
    });
  }
}

export default QuizQuestionButton;
