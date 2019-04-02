import React from 'react';
import classNames from 'classnames';
const images = require.context('../images', true);

class HexBuilder extends React.Component {
    render() {
        const currentId = this.props.currentHexId || 0;
        const currentHexId = `hex${currentId}`;
        const hexData = this.props.allHexes[currentHexId];
        const imgSrc = images(`./hexagrams/svg/${currentId}.svg`);

        const hexagramClasses = classNames('w-1/2', 'hexagram-glyph', {
            'i-ching-logo': !currentId,
        });

        return (
            <div>
                <p className="rounded-lg w-8 h-8 flex items-center justify-center bg-grey-lighter text-grey-darkest font-semibold">
                    {currentId || '#'}
                </p>
                <h2 className="text-slate">{hexData.name}</h2>
                <img
                    className={hexagramClasses}
                    src={imgSrc}
                    alt={'hexagram ' + this.props.currentHexId}
                />
                <p className="text-slate">{hexData.desc}</p>
            </div>
        );
    }
}

export default HexBuilder;
