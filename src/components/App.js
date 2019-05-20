import React, { Component } from 'react';
import FormulatedQuestion from './FormulatedQuestion';
import InputQuestion from './InputQuestion';
import hexes from '../data/hexes';
import Header from './Header';
import _ from 'lodash';

class App extends Component {
    constructor() {
        super();
        this.state = {
            hexLibrary: hexes,
            hexagram: [],
            changingHexagram: [],
            transformedHexagram: [],
            hexagramCompleted: false,
            hexagramId: 0,
            question: '',
        };
    }

    componentDidMount() {
        const localStorageQuestion = localStorage.getItem('question')
            ? localStorage.getItem('question')
            : '';
        const localStorageHexagram = JSON.parse(
            localStorage.getItem('hexagram')
        );
        const localStorageChangingHexagram = JSON.parse(
            localStorage.getItem('changingHexagram')
        );

        if (localStorageQuestion) {
            this.setState({ question: localStorageQuestion });
        }
        if (localStorageHexagram) {
            this.setState({ hexagram: localStorageHexagram });
        }
        if (localStorageChangingHexagram) {
            this.setState({ hexagram: localStorageChangingHexagram });
        }
    }

    componentDidUpdate() {
        localStorage.setItem('question', this.state.question);
        localStorage.setItem('hexagram', JSON.stringify(this.state.hexagram));
        localStorage.setItem(
            'changingHexagram',
            JSON.stringify(this.state.changingHexagram)
        );
    }

    clearUserState = items => {
        const { question, hexagram, changingHexagram } = items;

        if (question.clear) {
            localStorage.removeItem('question');
            this.setState({ question: '' });
        }
        if (hexagram.clear) {
            localStorage.removeItem('hexagram');
            this.setState({ hexagram: '' });
        }
        if (changingHexagram.clear) {
            localStorage.removeItem('changingHexagram');
            this.setState({ changingHexagram: '' });
        }
    };

    logQuestion = q => {
        let question = { ...this.state.question };
        question = q;
        this.setState({ question });
    };

    addLineToHex = lineId => {
        console.log('lineId', lineId);
        // need to preserve the changing lines before conversion
        this.setState({
            changingHexagram: [...this.state.changingHexagram, lineId],
        });
        if (lineId === 6) {
            lineId = 8;
        } else if (lineId === 9) {
            lineId = 7;
        }
        console.log('lineId post convert', lineId);
        this.setState({
            hexagram: [...this.state.hexagram, lineId],
        });
    };

    setHexagramComplete = hexComplete => {
        if (hexComplete) {
            this.setState({ hexagramCompleted: true });
        }
    };

    setHexId = hexagram => {
        console.log('hexagram for line id:', hexagram);
        console.log('hex complete!');
        hexes.filter(hex => {
            // console.log('hex', hex.lines);
            // console.log('hex.', hexagram);
            if (_.isEqual(hexagram, hex.lines)) {
                console.log('biagio;', hex.id);
                this.setState({ hexagramId: hex.id });
            }
        });
    };

    render() {
        return (
            <>
                <Header />
                <>
                    <div className="main-col opacity-75 p-4 pb-6">
                        <InputQuestion
                            logQuestion={this.logQuestion}
                            question={this.state.question}
                        />
                        <FormulatedQuestion
                            reset={this.clearUserState}
                            question={this.state.question}
                            allHexes={this.state.hexLibrary}
                            addLineToHex={this.addLineToHex}
                            setHexId={this.setHexId}
                            hexagram={this.state.hexagram}
                            changingHexagram={this.state.changingHexagram}
                            setHexagramComplete={this.setHexagramComplete}
                            hexIsReady={this.state.hexagramCompleted}
                        />
                    </div>
                    {/* <div className="main-col text-grey-darker text-center bg-frost opacity-75 p-4 pb-6">
                        <Hexagram
                            currentHexId={this.state.hexagram}
                            allHexes={this.state.hexLibrary}
                            question={this.state.question}
                        />
                    </div> */}
                </>
            </>
        );
    }
}

export default App;
