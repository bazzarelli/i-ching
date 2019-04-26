import React from 'react';
import classNames from 'classnames';
import HexBuilder from './HexBuilder';
import StartOver from './StartOver';

class CoinToss extends React.Component {
    setCoinSides(tossArr) {
        tossArr.forEach((item, index) => {
            this[`coin${index + 1}`].className = item & 1 ? 'tails' : 'heads';
        });
    }

    tripleToss = () => {
        const coinSides = [2, 3];

        return [0, 0, 0].reduce(function(acc, value) {
            let flip = coinSides[Math.floor(Math.random() * coinSides.length)];
            acc.push(value + flip);
            return acc;
        }, []);
    };

    generateLine = () => {
        const tossArr = this.tripleToss();
        const lineId = tossArr.reduce((acc, val) => acc + val);
        this.setCoinSides(tossArr);

        return new Promise(resolve => {
            setTimeout(() => {
                resolve(lineId);
            }, 2600);
        });
    };

    hexButtonHandler = () => {
        // prevent button from being clicked until hex is finished
        this.btn.setAttribute('disabled', 'disabled');
        this.btn.className = 'btn btn-disabled w-2/5';

        // leave as permanently disabled after length is 6
        if (this.props.hexagram.length === 6) {
            this.props.setHexagramComplete(true);
        } else if (this.props.hexagram.length < 6) {
            this.generateLine().then(lineId => {
                this.btn.removeAttribute('disabled');
                this.btn.className = 'btn btn-action w-2/5';
                this.props.addLineToHex(lineId);
            });
        }
    };

    tossCoin = () => {
        const currentToss = Math.floor(Math.random() * 64) + 1;
        this.props.addHex(currentToss);
    };

    render() {
        const hexCompleted = this.props.hexIsReady;

        const tossClasses = classNames('w-1/3', {
            visible: !hexCompleted,
            hidden: hexCompleted,
        });
        const hexagramClasses = classNames('text-center', 'mt-6', 'md:mt-0', {
            'w-2/3': !hexCompleted,
            'w-full': hexCompleted,
        });

        return (
            <div className="flex content-between">
                <div className={tossClasses}>
                    <p className="text-grey-darker text-md my-4 pl-2 leading-normal">
                        Now that you have the question, it's time to build your
                        hexagram. Keep your question in your thoughts as you
                        click the button six different times to generate your
                        hexagram &mdash; one line at a time.
                    </p>

                    <div className="flex items-center justify-around">
                        <button
                            ref={btn => {
                                this.btn = btn;
                            }}
                            onClick={this.hexButtonHandler}
                            className="btn btn-action w-2/5"
                            type="button"
                        >
                            toss coins
                        </button>
                        <div
                            className=" w-1/5"
                            id="coin1"
                            ref={coin1 => {
                                this.coin1 = coin1;
                            }}
                        >
                            <div className="side-a" />
                            <div className="side-b" />
                        </div>
                        <div
                            className=" w-1/5"
                            id="coin2"
                            ref={coin2 => {
                                this.coin2 = coin2;
                            }}
                        >
                            <div className="side-a" />
                            <div className="side-b" />
                        </div>
                        <div
                            className=" w-1/5"
                            id="coin3"
                            ref={coin3 => {
                                this.coin3 = coin3;
                            }}
                        >
                            <div className="side-a" />
                            <div className="side-b" />
                        </div>
                    </div>
                    <div className="mt-4 pl-2 text-grey-darker text-sm">
                        You have tossed the coins
                        <strong className="text-grey-darkest mx-1">
                            {this.props.hexagram.length}
                        </strong>
                        out of 6 times
                    </div>
                </div>

                <div className={hexagramClasses}>
                    <HexBuilder hexagram={this.props.hexagram} />
                    <StartOver reset={this.props.reset} />
                </div>
            </div>
        );
    }
}

export default CoinToss;
