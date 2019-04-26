import React from 'react';
import HexLine from './HexLine';

class HexBuilder extends React.Component {
    render() {
        let currentHexArr = this.props.hexagram;
        console.log('currentHexState builder:', this.props.hexagram);

        return (
            <svg
                width="395"
                height="500"
                viewBox="0 0 395 500"
                x="0px"
                y="0px"
                version="1.1"
            >
                <HexLine hexagram={this.props.hexagram} />
            </svg>
        );
    }
}

export default HexBuilder;
