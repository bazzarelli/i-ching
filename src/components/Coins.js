import React from 'react';
import classNames from 'classnames';
class Coins extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            side: false,
            lineId: null,
        };
    }
    setCoinSide(lineId) {
        console.log('lineId', lineId);

        this.setState({
            // side: lineId % 2 == 0,
            side: lineId & 1,
            lineId: lineId,
        });
    }
    tossCoin = () => {
        const LINE_IDS = [6, 7, 8, 9];
        const getLineId = Math.floor(Math.random() * 4);
        const currentLineId = LINE_IDS[getLineId];
        this.setCoinSide(currentLineId);
    };

    render() {
        const coin1Classes = classNames('float-left', {
            heads: !this.state.side,
            tails: this.state.side,
        });

        return (
            <div className="inline-flex w-64">
                <div
                    id="coin-1"
                    className={coin1Classes}
                    onClick={this.tossCoin}
                >
                    <div className="side-a" />
                    <div className="side-b" />
                </div>
                <div id="coin-2" className="float-left">
                    <div className="side-a" />
                    <div className="side-b" />
                </div>
                <div id="coin-3" className="float-left">
                    <div className="side-a" />
                    <div className="side-b" />
                </div>
            </div>
        );
    }
}

export default Coins;
