import React from "react";

class QuestionTextarea extends React.Component {
  questionRef = React.createRef();

  askQuestion = event => {
    event.preventDefault();
    const q = this.questionRef.current.value;
    console.log("question: ", q);
    this.props.logQuestion(q);
  };

  render() {
    const formVisibility = {
      display: this.props.question ? "none" : "block"
    };

    return (
      <form
        style={formVisibility}
        className="bg-grey-lightest rounded px-8 pt-6 pb-4 mb-4"
        onSubmit={this.askQuestion}
      >
        <label
          className="block text-grey-darker text-sm font-bold mb-2"
          htmlFor="question"
        >
          Enter your question:
        </label>
        <textarea
          id="question"
          autoFocus="autofocus"
          className="appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
          ref={this.questionRef}
          placeholder="e.g. Is now a good time for me to buy a house?"
        />
        <button
          className="bg-grey-dark text-white hover:bg-blue-light hover:text-slate py-2 px-4 my-2 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          save
        </button>
      </form>
    );
  }
}

export default QuestionTextarea;
