import React from 'react';
import HexLine from './HexLine';
import StartOver from './StartOver';

class HexBuilder extends React.Component {
    render() {
        return (
            <>
                <svg
                    width="355"
                    height="400"
                    viewBox="0 0 355 400"
                    x="0px"
                    y="0px"
                    version="1.1"
                >
                    <HexLine hexagramArray={this.props.changingHexagram} />
                </svg>
                <StartOver reset={this.props.reset} />
            </>
        );
    }
}

export default HexBuilder;
