import React from "react";

class StartOver extends React.Component {
  clearStorage = event => {
    event.preventDefault();
    const resetAll = {
      question: { clear: true },
      hexagram: { clear: true }
    };
    console.log("reset:", resetAll);
    this.props.reset(resetAll);
  };

  render() {
    return (
      <form className="flex-1 coin-toss-form" onSubmit={this.clearStorage}>
        <button
          className="bg-blue-light text-slate hover:bg-grey-dark py-2 px-4 my-2 w-64 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          reset
        </button>
      </form>
    );
  }
}

export default StartOver;
