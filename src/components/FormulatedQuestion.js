import React from "react";
import CoinToss from "./CoinToss";
import classNames from "classnames";

class FormulatedQuestion extends React.Component {
  render() {
    const headerClassformVisibility = {
      display: this.props.question ? "block" : "none"
    };

    const headerClass = classNames({
      "question-header": this.props.question,
      "question-header-shut": !this.props.question
      // 'header-slide-open': this.props.question ? 'visible' : 'hidden',
      // 'visible':  ? 'visible' : 'hidden'
      // visible: this.props.question
    });

    return (
      <div>
        <header>
          <h2 className={headerClass + ' text-4xl text-center text-grey-light font-thin bg-black rounded px-6 py-6'}
          >
            {this.props.question}
          </h2>
        </header>
        <CoinToss question={this.props.question} addHex={this.props.addHex} />
      </div>
    );
  }
}

export default FormulatedQuestion;
