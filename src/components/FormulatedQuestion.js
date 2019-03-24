import React from "react";
import CoinToss from "./CoinToss";
import classNames from "classnames";
import StartOver from "./StartOver";

class FormulatedQuestion extends React.Component {
  render() {
    let hasQuestion = this.props.question;
    const headerClass = classNames({
      "question-header": hasQuestion,
      "question-header-shut": !hasQuestion
    });

    const buttonContainerClass = classNames({
      flex: hasQuestion,
      visible: hasQuestion,
      hidden: !hasQuestion
    });
    return (
      <div>
        <header className={headerClass}>
          <h2 className="text-4xl text-center text-grey-light font-thin bg-grey-darker rounded px-6 py-6">
            {this.props.question}
          </h2>
        </header>
        <div className={buttonContainerClass}>
          <CoinToss question={this.props.question} addHex={this.props.addHex} />
          <StartOver reset={this.props.reset} />
        </div>
      </div>
    );
  }
}

export default FormulatedQuestion;
