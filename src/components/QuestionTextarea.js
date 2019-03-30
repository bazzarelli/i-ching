import React from 'react';

class QuestionTextarea extends React.Component {
    questionRef = React.createRef();

    askQuestion = event => {
        event.preventDefault();
        const q = this.questionRef.current.value;
        console.log('question: ', q);
        this.props.logQuestion(q);
    };

    componentDidUpdate() {
    // clear out any previous question text
    this.questionRef.current.value = '';
    }

    render() {
        const formVisibility = {
            display: this.props.question ? 'none' : 'block'
        };

        return (
            <form
                style={formVisibility}
                className="bg-blue-lightest rounded px-8 pt-6 pb-4 border border-solid border-blue-lighter"
                onSubmit={this.askQuestion}
            >
                <label
                    className="block text-grey-darker text-sm font-bold mb-2"
                    htmlFor="question"
                >
                    Type in your question
                </label>
                <textarea
                    id="question"
                    autoFocus="autofocus"
                    className="appearance-none border bg-white rounded w-full py-2 px-3 text-grey-darker focus:outline-none focus:shadow-outline"
                    ref={this.questionRef}
                    placeholder="e.g. Is now a good time to change jobs?"
                />
                <button
                    className="bg-grey-dark text-grey-lighter hover:bg-orange-light hover:text-slate py-2 px-4 my-2 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    save question
                </button>
            </form>
        );
    }
}

export default QuestionTextarea;
