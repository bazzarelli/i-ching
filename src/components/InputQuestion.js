import React from 'react';

class InputQuestion extends React.Component {
    questionRef = React.createRef();

    askQuestion = event => {
        event.preventDefault();
        const q = this.questionRef.current.value;
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
                    className="p6"
                    onSubmit={this.askQuestion}
                >
                    <label
                        className="block text-grey-darker text-md mb-2 ml-1"
                        htmlFor="question"
                    >
                        Begin by typing your question into the text area below
                    </label>
                    <textarea
                        id="question"
                        autoFocus="autofocus"
                        className="appearance-none border bg-white rounded w-full py-2 px-3 text-grey-darker focus:outline-none focus:shadow-outline"
                        ref={this.questionRef}
                        placeholder="e.g. How would my life be affected if I changed
                    jobs?"
                    />
                    <p className="flex items-center md:items-start">
                        <button
                            className="btn btn-action mt-4 text-center w-full md:w-1/5"
                            type="submit"
                        >
                            Save
                        </button>
                    </p>
                    <p className="text-grey-darker text-md mt-4 ml-1 leading-normal">
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

export default InputQuestion;
