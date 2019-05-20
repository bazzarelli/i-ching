import React from 'react';
import CoinToss from './CoinToss';
import classNames from 'classnames';

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
                        addLineToHex={this.props.addLineToHex}
                        hexagram={this.props.hexagram}
                        changingHexagram={this.props.changingHexagram}
                        setHexagramComplete={this.props.setHexagramComplete}
                        hexIsReady={this.props.hexIsReady}
                        reset={this.props.reset}
                        setHexId={this.props.setHexId}
                    />
                </span>
            </div>
        );
    }
}

export default FormulatedQuestion;
