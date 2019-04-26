import React from 'react';

class StartOver extends React.Component {
    clearStorage = () => {
        const resetAll = {
            question: { clear: true },
            hexagram: { clear: true },
        };

        this.props.reset(resetAll);
    };

    render() {
        return (
            <div>
                <button
                    onClick={this.clearStorage}
                    className="btn btn-cancel"
                    type="button"
                >
                    reset
                </button>
            </div>
        );
    }
}

export default StartOver;
