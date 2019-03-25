import React, { Component } from 'react';
import Header from './components/Header';
import FormulatedQuestion from './components/FormulatedQuestion';
import HexBuilder from './components/HexBuilder';
import QuestionTextarea from './components/QuestionTextarea';
import hexes from './data/hexes';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hexLibrary: hexes,
            hexagram: 0,
            question: ''
        };
    }

    componentDidMount() {
        const localStorageQuestion = localStorage.getItem('question');
        const localStorageHexagram = localStorage.getItem('hexagram');

        if (localStorageHexagram) {
            this.setState({ hexagram: localStorageHexagram });
        }
        if (localStorageQuestion) {
            this.setState({ question: localStorageQuestion });
        }
    }

    componentDidUpdate() {
        localStorage.setItem('question', this.state.question);
        localStorage.setItem('hexagram', this.state.hexagram);
    }

    clearUserState = items => {
        const { question, hexagram } = items;

        if (question.clear) {
            localStorage.removeItem('question');
            this.setState({ question: '' });
        }
        if (hexagram.clear) {
            localStorage.removeItem('hexagram');
            this.setState({ hexagram: '' });
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
                <Header
                    heading="i-ching for beginners"
                    subHeading="receive guidance from the ancient oracle"
                />
                <div className="md:flex md:flex-wrap bg-lead">
                    <div className="md:flex-1 bg-frost p-4 m-2 rounded">
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
                    <div className="md:flex-1 text-grey-darker text-center bg-frost p-4 m-2 rounded">
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
