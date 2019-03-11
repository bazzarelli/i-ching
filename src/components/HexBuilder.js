import React from 'react';
import HexLine from './HexLine';

class HexBuilder extends React.Component {
    render() {
        const lineStyle = {
            borderBottom: '1px solid red',
        };

        return (
            <ul className="list-reset w-64 h-64">
                <li>
                    <HexLine />
                </li>
            </ul>
        );
    }
}

export default HexBuilder;
