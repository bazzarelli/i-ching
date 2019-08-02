import React from 'react';
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
    increment,
    incrementAsync,
    decrement,
    decrementAsync,
} from '../modules/counter';

const Home = props => (
    <>
        <div className="main-col bg-frost opacity-75 p-8 md:p-4 pb-6">
            <p>Thunk example part</p>
            <p>Count: {props.count}</p>

            <p>
                <button onClick={props.increment}>Increment</button>
                <button
                    onClick={props.incrementAsync}
                    disabled={props.isIncrementing}
                >
                    Increment Async
                </button>
            </p>

            <p>
                <button onClick={props.decrement}>Decrementing</button>
                <button
                    onClick={props.decrementAsync}
                    disabled={props.isDecrementing}
                >
                    Decrement Async
                </button>
            </p>

            <p>
                <button onClick={() => props.changePage()}>
                    Go to about page via redux
                </button>
            </p>

            <p className="text-grey-dark text-2xl font-bold tracking-normal">
                What is the I Ching and how can it benefit me?
            </p>
            <p className="para-intro">
                The I Ching is an ancient Chinese divination text dating back to
                1000 BC. It is used to provide guidance for moral decision
                making. The basics of its use are quite approachable, the
                complexity lies in the interpretation which has been evolving
                over thousands of years.
            </p>
            <p className="para-intro">
                Anyone can use the I Ching by asking a question and generating a
                hexagram via methods such as tossing coins or drawing yarrow
                stalks. Once you have your hexagram symbol (also referred to as
                the kua) you can use it to reference the hexagram interpretation
                from an I Ching book*.
            </p>
            <p className="para-intro">Are you ready to build your hexagram?</p>
            <p className="para-intro mt-6 flex items-center md:items-start">
                <button
                    onClick={() => props.changePage()}
                    className="btn btn-action text-center w-full md:w-2/5"
                >
                    Build Hexagram
                </button>
            </p>

            <p className="text-xs text-grey-darker mt-6">
                *The book used here is 'I Ching The Book of Answers' by Wu Wei.
            </p>
        </div>
    </>
);

const mapStateToProps = ({ counter }) => ({
    count: counter.count,
    isIncrementing: counter.isIncrementing,
    isDecrementing: counter.isDecrementing,
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            increment,
            incrementAsync,
            decrement,
            decrementAsync,
            changePage: () => push('/build-your-hexagram'),
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
