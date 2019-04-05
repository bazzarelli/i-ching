import React from 'react';
import classNames from 'classnames';

class CoinToss extends React.Component {
    handleClicks = () => {
        this.props.countClicks(Number(this.props.currentClicks) + 1);

        if (this.props.currentClicks === 5) {
            this.tossCoin();
        }
    };

    tossCoin = () => {
        const currentToss = Math.floor(Math.random() * 64) + 1;
        this.props.addHex(currentToss);
    };

    render() {
        let currentClicks = Number(this.props.currentClicks);

        const counterClasses = classNames('click-counter', {
            visible: currentClicks,
            hidden: !currentClicks || currentClicks === 6,
        });

        const buttonVisibility = {
            display: currentClicks === 6 ? 'none' : 'inline-block',
        };

        const paraVisibility = {
            display: currentClicks === 6 ? 'none' : 'block',
        };

        return (
            <div>
                <p
                    style={paraVisibility}
                    className="text-grey-darker text-md mt-4 leading-normal"
                >
                    Now that you have your question formulated, it's time to
                    build your hexagram.
                </p>
                <p
                    style={paraVisibility}
                    className="text-grey-darker text-md mt-4 leading-normal"
                >
                    Click the 'build hexagram' button six times to generate your
                    hexagram.
                </p>
                <button
                    style={buttonVisibility}
                    onClick={this.handleClicks}
                    className="btn btn-submit mt-4"
                    type="button"
                >
                    build hexagram
                </button>
                <span className={counterClasses}>
                    {this.props.currentClicks}
                </span>
            </div>
        );
    }
}

export default CoinToss;
