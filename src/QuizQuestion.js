import React, { Component } from "react";

class QuizQuestion extends Component {
  constructor(props) {
    super();
    this.state = {
      quizQuestion: props.quiz_question
    };
  }

  render() {
    return (
      <main>
        <section>
          <p>{this.state.quizQuestion.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
            <li>{this.state.quizQuestion.answer_options[0]}</li>
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
