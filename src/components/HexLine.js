import React from 'react';

class HexLine extends React.Component {
    render() {

        // const lineStyle = {
        //     borderBottom: '1px solid red',
        // };

        return (
            <svg viewBox="0 0 395 500" version="1.1">
                <rect x="0" y="10" width="395" height="35" fill="black" />
                <rect x="0" y="80" width="395" height="35" fill="gray" />
                        <rect x="0" y="150" width="395" height="35" fill="black" />
                {/* <rect x="10" y="220" width="395" height="35" fill="black" /> */}
                <g fill="black">
                    <rect x="0" y="220" width="166" height="35" fill="black" />
                    <rect x="229" y="220" width="166" height="35" fill="black" />
                </g>
                <rect x="0" y="290" width="395" height="35" fill="gray" />
                <rect x="0" y="360" width="395" height="35" fill="black" />
            </svg>
        )
    }
}

export default HexLine;
