import React, { Component } from 'react';
import FormulatedQuestion from './FormulatedQuestion';
import HexBuilder from './HexBuilder';
import QuestionTextarea from './QuestionTextarea';
import hexes from '../data/hexes';
import Header from './Header';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hexLibrary: hexes,
            hexagram: 0,
            clickCount: 0,
        };
    }

    componentDidMount() {
        const localStorageQuestion = localStorage.getItem('question')
            ? localStorage.getItem('question')
            : '';
        const localStorageHexagram = Number(localStorage.getItem('hexagram'));
        const localStorageClickCount = Number(
            localStorage.getItem('clickCount')
        );

        if (localStorageHexagram) {
            this.setState({ hexagram: localStorageHexagram });
        }
        if (localStorageQuestion) {
            this.setState({ question: localStorageQuestion });
        }
        if (localStorageClickCount) {
            this.setState({ clickCount: localStorageClickCount });
        }
    }

    componentDidUpdate() {
        localStorage.setItem('question', this.state.question);
        localStorage.setItem('hexagram', this.state.hexagram);
        localStorage.setItem('clickCount', this.state.clickCount);
    }

    clearUserState = items => {
        const { question, hexagram, clickCount } = items;

        if (question.clear) {
            localStorage.removeItem('question');
            this.setState({ question: '' });
        }
        if (hexagram.clear) {
            localStorage.removeItem('hexagram');
            this.setState({ hexagram: '' });
        }
        if (clickCount.clear) {
            localStorage.removeItem('clickCount');
            this.setState({ clickCount: 0 });
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

    countClicks = n => {
        let clickCount = { ...this.state.clickCount };
        clickCount = n;
        this.setState({ clickCount });
    };

    render() {
        return (
            <>
                <Header
                    heading="I Ching for Beginners"
                    subHeading="guidance from the ancient oracle"
                />
                <div className="md:flex md:flex-wrap bg-lead mt-8">
                    <div className="main-col md:flex-1 bg-frost opacity-75 p-4 pb-6 mx-2 rounded">
                        <QuestionTextarea
                            logQuestion={this.logQuestion}
                            question={this.state.question}
                        />
                        <FormulatedQuestion
                            addHex={this.addHex}
                            reset={this.clearUserState}
                            question={this.state.question}
                            hexId={this.state.hexagram}
                            currentClicks={this.state.clickCount}
                            countClicks={this.countClicks}
                        />
                    </div>
                    <div className="main-col md:flex-1 text-grey-darker text-center bg-frost opacity-75 p-4 pb-6 mx-2 rounded">
                        <HexBuilder
                            currentHexId={this.state.hexagram}
                            allHexes={this.state.hexLibrary}
                            question={this.state.question}
                        />
                    </div>
                </div>
            </>
        );
    }
}

export default App;
