import React from 'react'
import CoinToss from './CoinToss'
import classNames from 'classnames'
import StartOver from './StartOver'

class FormulatedQuestion extends React.Component {
    render() {
        const hasQuestion = this.props.question
        const hasHexagram = this.props.hexId

        const headerClasses = classNames('question-header', {
            visible: hasQuestion,
            hidden: !hasQuestion,
        })

        const coinTossButtonClasses = classNames({
            visible: hasQuestion,
            hidden: !hasQuestion,
        })

        const resetButtonClasses = classNames({
            visible: hasHexagram,
            hidden: !hasHexagram,
        })

        return (
            <div>
                <header className={headerClasses}>
                    <h2 className="text-4xl text-center text-slate-blue font-thin rounded p-3">
                        {this.props.question}
                    </h2>
                </header>
                <span className={coinTossButtonClasses}>
                    <CoinToss
                        question={this.props.question}
                        addHex={this.props.addHex}
                    />
                </span>
                <span className={resetButtonClasses}>
                    <StartOver reset={this.props.reset} />
                </span>
            </div>
        )
    }
}

export default FormulatedQuestion
