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
            display: this.props.question ? 'none' : 'block',
        };

        return (
            <>
                <form
                    style={formVisibility}
                    className="bg-blue-lightest rounded p-6 border border-solid border-blue-lighter shadow-lg"
                    onSubmit={this.askQuestion}
                >
                    <label
                        className="block text-grey-darker text-md mb-2"
                        htmlFor="question"
                    >
                        Begin by asking your question
                    </label>
                    <textarea
                        id="question"
                        autoFocus="autofocus"
                        className="appearance-none border bg-white rounded w-full py-2 px-3 text-grey-darker focus:outline-none focus:shadow-outline"
                        ref={this.questionRef}
                        placeholder="e.g. How would my life be affected if I changed
                    jobs?"
                    />
                    <button className="btn btn-submit mt-4" type="submit">
                        save question
                    </button>
                    <p className="text-grey-dark text-md mt-4 leading-normal">
                        Open-ended questions are more suited to the I Ching
                        interpretation. A yes/no question like, "Should I change
                        my job?" would be better phrased, "How would my life be
                        affected if I changed jobs?"
                    </p>
                </form>
            </>
        );
    }
}

export default QuestionTextarea;
