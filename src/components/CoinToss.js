import React from 'react';

class CoinToss extends React.Component {
    tossCoin = event => {
        event.preventDefault();

        let currentToss = Math.floor(Math.random() * 4) + 1;
        console.log('currentToss', currentToss);

        // this.props.addLine(currentToss);
    };

    render() {
        return (
            <form className="coin-toss-form" onSubmit={this.tossCoin}>
                <button
                    className="bg-grey-dark text-white hover:bg-blue-light hover:text-slate py-2 px-4 my-2 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    cast coins
                </button>
            </form>
        );
    }
}

export default CoinToss;
