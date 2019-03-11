import React from 'react';

class Hexagram extends React.Component {
    loadHex = event => {
        event.preventDefault();
        // let currentToss = Math.floor(Math.random() * 4) + 1;
        // console.log('currentToss', currentToss);
        this.props.loadHexData();
    };

    render() {
        return (
            <div className="">
                <button onClick={this.loadHex}>load hexagrams</button>
            </div>
        );
    }
}

export default Hexagram;
