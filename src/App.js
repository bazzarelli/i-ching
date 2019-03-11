import React, { Component } from 'react';
import Header from './components/Header';
import CoinToss from './components/CoinToss';
import FormulatedQuestion from './components/FormulatedQuestion';
import HexBuilder from './components/HexBuilder';
import hexes from './data/hexes';
import QuestionTextarea from './components/QuestionTextarea';

class App extends Component {
    state = {
        hexLibrary: hexes,
        hexagram: {},
        question: '',
    };

    logQuestion = q => {
        let question = { ...this.state.question };
        question = q;
        this.setState({ question });
    };

    addHex = toss => {
        let hexagram = { ...this.state.hexagram };
        hexagram = toss;

        // hexagram[`toss-${Date.now()}`] = toss;

        this.setState({ hexagram });
    };

    render() {
        return (
            <div className="flex flex-wrap bg-lead">
                <div className="flex-1 bg-frost px-4 py-2 m-2 rounded">
                    <Header heading="I-Ching" />
                    <QuestionTextarea logQuestion={this.logQuestion} question={this.state.question} />
                    <CoinToss addHex={this.addHex} />
                </div>
                <div className="flex-1 text-grey-darker text-center bg-frost px-4 py-2 m-2 rounded">
                    <FormulatedQuestion question={this.state.question} />
                    <HexBuilder />
                </div>
            </div>
        );
    }
}

export default App;
