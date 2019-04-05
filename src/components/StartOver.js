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
                className="hover:underline float-right pr-1"
                type="button"
            >
                reset
            </button>
        );
    }
}

export default StartOver;
