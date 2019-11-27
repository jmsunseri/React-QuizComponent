import React, { Component } from "react";

class QuizQuestionButton extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <li>
        <button onClick={() => this.props.clickHandler(this.props.button_text)}>
          {this.props.button_text}
        </button>
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
