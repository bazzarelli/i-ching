import React from 'react';

class CoinToss extends React.Component {
    tossCoin = () => {
        const currentToss = Math.floor(Math.random() * 64) + 1;
        this.props.addHex(currentToss);
    };

    render() {
        return (
            <button
                onClick={this.tossCoin}
                className="mx-4 flex-1 bg-grey-dark text-grey-lighter hover:bg-orange-light hover:text-slate py-2 px-4 my-2 rounded focus:outline-none focus:shadow-outline"
                type="button"
            >
                coin toss
            </button>
        );
    }
}

export default CoinToss;
