import React from "react";

class CoinToss extends React.Component {
  tossCoin = event => {
    event.preventDefault();
    const currentToss = Math.floor(Math.random() * 64) + 1;
    this.props.addHex(currentToss);
  };

  render() {
    return (
      <form className="flex-1 coin-toss-form" onSubmit={this.tossCoin}>
        <button
          className="bg-blue-light text-slate hover:bg-grey-dark py-2 px-4 my-2 w-64 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          coin toss
        </button>
      </form>
    );
  }
}

export default CoinToss;
