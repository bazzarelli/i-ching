import React from 'react';
import CoinToss from './CoinToss';
import classNames from 'classnames';
import StartOver from './StartOver';

class FormulatedQuestion extends React.Component {
    render() {
        const hasQuestion = this.props.question;

        const headerClasses = classNames('question-header', {
            visible: hasQuestion,
            hidden: !hasQuestion,
        });

        const coinTossButtonClasses = classNames({
            visible: hasQuestion,
            hidden: !hasQuestion,
        });

        const resetButtonClasses = classNames({
            visible: hasQuestion,
            hidden: !hasQuestion,
        });

        return (
            <div>
                <header className={headerClasses}>
                    <h2 className="text-2xl text-slate-blue font-thin rounded p-3 border border-grey bg-grey-lighter opacity-75 mb-2">
                        {this.props.question}
                    </h2>
                </header>
                <span className={coinTossButtonClasses}>
                    <CoinToss
                        question={this.props.question}
                        addHex={this.props.addHex}
                        countClicks={this.props.countClicks}
                        currentClicks={this.props.currentClicks}
                    />
                </span>
                <div className={resetButtonClasses}>
                    <StartOver reset={this.props.reset} />
                </div>
            </div>
        );
    }
}

export default FormulatedQuestion;
