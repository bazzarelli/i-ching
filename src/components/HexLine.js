import React from 'react';
import hexLines from '../data/hex-lines';
class HexLine extends React.Component {
    render() {
        console.log('currentHexState line:', this.props.hexagram);
        return (
            <>
                <rect x="0" y="10" width="395" height="35" fill="black" />
                <rect x="0" y="80" width="395" height="35" fill="gray" />
                <rect x="0" y="150" width="395" height="35" fill="black" />
                {/* <rect x="10" y="220" width="395" height="35" fill="black" /> */}
                <g fill="black">
                    <rect x="0" y="220" width="166" height="35" fill="black" />
                    <rect
                        x="229"
                        y="220"
                        width="166"
                        height="35"
                        fill="black"
                    />
                </g>
                <rect x="0" y="290" width="395" height="35" fill="gray" />

                <rect
                    id="line1"
                    x="0"
                    y="360"
                    width="395"
                    height="35"
                    fill="black"
                >
                    <animate
                        attributeName="height"
                        from="0"
                        to="35"
                        dur="0.5s"
                        fill="freeze"
                    />
                    <animate
                        attributeName="y"
                        from="350"
                        to="360"
                        dur="0.58s"
                        fill="freeze"
                    />
                </rect>
            </>
        );
    }
}

export default HexLine;
