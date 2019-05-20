import React from 'react';
import constants from '../data/constants';

class HexLine extends React.Component {
    renderSolid(changing, y, key) {
        const barColor = changing ? 'gray' : 'black';

        return (
            <rect
                key={key}
                x="0"
                y={y}
                width="340"
                height="30"
                fill={barColor}
            />
        );
    }

    renderBroken(changing, y, key) {
        const barColor = changing ? 'gray' : 'black';

        return (
            <g key={key}>
                <rect x="0" y={y} width="150" height="30" fill={barColor} />
                <rect x="190" y={y} width="150" height="30" fill={barColor} />
            </g>
        );
    }

    render() {
        const hexagramArray = this.props.hexagramArray || [];

        return hexagramArray.map((lineId, i) => {
            let isSolidLine = lineId & 1; // solids are odd

            if (isSolidLine) {
                return this.renderSolid(
                    lineId === 9,
                    constants.yPos[i],
                    `lineId-${i}`
                );
            } else {
                return this.renderBroken(
                    lineId === 6,
                    constants.yPos[i],
                    `lineId-${i}`
                );
            }
        });
    }
}

export default HexLine;
