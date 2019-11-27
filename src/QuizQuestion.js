import React, { Component } from "react";
import QuizQuestionButton from "./QuizQuestionButton";

class QuizQuestion extends Component {
  constructor(props) {
    super();
  }

  handleClick(buttonText) {
    if (this.props.quiz_question.answer === buttonText) {
      this.props.showNextQuestionHandler();
    }
  }

  render() {
    return (
      <main>
        <section>
          <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
            {this.props.quiz_question.answer_options.map((element, index) => {
              return (
                <QuizQuestionButton
                  key={index}
                  button_text={element}
                  clickHandler={this.handleClick.bind(this)}
                ></QuizQuestionButton>
              );
            })}
          </ul>
        </section>
      </main>
    );
  }

  componentDidMount() {
    this.setState({
      someKey: "otherValue"
    });
  }
}

export default QuizQuestion;
