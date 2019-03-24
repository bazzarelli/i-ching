import React, { Component } from "react";
import Header from "./components/Header";
import FormulatedQuestion from "./components/FormulatedQuestion";
import HexBuilder from "./components/HexBuilder";
import hexes from "./data/hexes";
import QuestionTextarea from "./components/QuestionTextarea";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hexLibrary: hexes,
      hexagram: null,
      question: ""
    };
  }

  componentDidMount() {
    const localStorageQuestion = localStorage.getItem("question");
    const localStorageHexagram = localStorage.getItem("hexagram");

    if (localStorageHexagram) {
      this.setState({ hexagram: localStorageHexagram });
    }
    if (localStorageQuestion) {
      this.setState({ question: localStorageQuestion });
    }
  }

  componentDidUpdate() {
    localStorage.setItem("question", this.state.question);
    localStorage.setItem("hexagram", this.state.hexagram);
  }

  clearUserState = items => {
    const { question, hexagram } = items;
    if (question.clear) {
      console.log("remove question");
      localStorage.removeItem("question");
      this.setState({ question: "" });
    }
    if (hexagram.clear) {
      console.log("remove hexagram");
      //   localStorage.setItem("hexagram", "");
      localStorage.removeItem("hexagram");
      this.setState({ hexagram: "" });
    }
  };

  logQuestion = q => {
    let question = { ...this.state.question };
    question = q;
    this.setState({ question });
  };

  addHex = toss => {
    let hexagram = { ...this.state.hexagram };
    hexagram = toss;

    this.setState({ hexagram });
  };

  render() {
    return (
      <div>
        <Header heading="i-ching for beginners" subHeading="chaos divination" />
        <div className="flex flex-row flex-wrap bg-lead">
          <div className="flex-1 bg-frost px-4 py-2 m-2 rounded">
            <QuestionTextarea
              logQuestion={this.logQuestion}
              question={this.state.question}
            />
            <FormulatedQuestion
              question={this.state.question}
              addHex={this.addHex}
              hexId={this.state.hexagram}
              reset={this.clearUserState}
            />
          </div>
          <div className="flex-1 text-grey-darker text-center bg-frost px-4 py-2 m-2 rounded">
            <HexBuilder
              currentHexId={this.state.hexagram}
              allHexes={this.state.hexLibrary}
              question={this.state.question}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
