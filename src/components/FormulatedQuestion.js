import React from 'react';
import CoinToss from './CoinToss';

class FormulatedQuestion extends React.Component {
    render() {
        let visibility = this.props.question ? 'visible' : 'hidden';

        return (
            <header className={visibility}>
                <h2 className="text-center text-red-light bg-currant rounded px-6 py-6">{this.props.question}</h2>
                <CoinToss question={this.props.question} addHex={this.props.addHex} />
            </header>
        );
    }
}

export default FormulatedQuestion;
