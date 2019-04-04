import React from 'react';

class StartOver extends React.Component {
    clearStorage = () => {
        const resetAll = {
            question: { clear: true },
            hexagram: { clear: true },
            clickCount: { clear: true },
        };

        this.props.reset(resetAll);
    };

    render() {
        return (
            <button
                onClick={this.clearStorage}
                className="reset-button hover:underline"
                type="button"
            >
                start over
            </button>
        );
    }
}

export default StartOver;
