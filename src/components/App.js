import React, { Component } from 'react';
import FormulatedQuestion from './FormulatedQuestion';
import InputQuestion from './InputQuestion';
import hexes from '../data/hexes';
import Header from './Header';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hexLibrary: hexes,
            hexagram: [],
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

        if (localStorageHexagram) {
            this.setState({ hexagram: localStorageHexagram });
        }
        if (localStorageQuestion) {
            this.setState({ question: localStorageQuestion });
        }
    }

    componentDidUpdate() {
        localStorage.setItem('question', this.state.question);
        localStorage.setItem('hexagram', JSON.stringify(this.state.hexagram));
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

    addLineToHex = lineId => {
        console.log('lineId', lineId);
        console.log('this.state.hexagram before', this.state.hexagram);
        this.setState({
            hexagram: [...this.state.hexagram, lineId],
        });
        console.log('this.state.hexagram after', this.state.hexagram);
    };

    /*
    countClicks = n => {
        let clickCount = { ...this.state.clickCount };
        clickCount = n;
        this.setState({ clickCount });
    };
*/

    setHexagramComplete = hexComplete => {
        if (hexComplete) {
            this.setState({ hexagramCompleted: true });
        }
    };
    getHexId = hexagram => {
        // use the hex lib to match array sequence
        // from the completed toss
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
                            hexagram={this.state.hexagram}
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
