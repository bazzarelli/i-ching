import React from 'react';

class Hexagram extends React.Component {
    loadHex = event => {
        event.preventDefault();
        this.props.loadHexData();
    };

    render() {
        return (
            <div>
                <button onClick={this.loadHex}>load hexagrams</button>
            </div>
        );
    }
}

export default Hexagram;
