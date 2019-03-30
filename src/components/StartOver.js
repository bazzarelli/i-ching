import React from 'react';

class StartOver extends React.Component {
    clearStorage = () => {
        const resetAll = {
            question: { clear: true },
            hexagram: { clear: true }
        };

        this.props.reset(resetAll);
    };

    render() {
        return (
            <button
                onClick={this.clearStorage}
                className="mx-4 flex-1 bg-grey-dark text-grey-lighter hover:bg-orange-light hover:text-slate py-2 px-4 my-2 rounded focus:outline-none focus:shadow-outline"
                type="button"
            >
                start over
            </button>
        );
    }
}

export default StartOver;
