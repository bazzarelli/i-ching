import React from 'react';
import classNames from 'classnames';
const images = require.context('../images', true);

class Hexagram extends React.Component {
    render() {
        const currentId = this.props.currentHexId || 0;
        const currentHexId = `hex${currentId}`;
        const hexData = this.props.allHexes[currentHexId];
        const imgSrc = images(`./hexagrams/svg/${currentId}.svg`);

        const hexagramClasses = classNames('w-1/2', 'hexagram-glyph', {
            'i-ching-logo': !currentId,
        });

        return (
            <>
                <p className="rounded w-8 h-8 flex items-center justify-center bg-grey-lighter text-grey-darkest font-semibold border border-grey">
                    {currentId || '?'}
                </p>
                <h2 className="text-slate mb-2">{hexData.name}</h2>
                <img
                    className={hexagramClasses}
                    src={imgSrc}
                    title={'hexagram ' + this.props.currentHexId}
                />
                <p className="text-slate mt-4 mb-6 text-xl">{hexData.desc}</p>
                <div className="text-slate mt-4 leading-normal text-left text-lg">
                    {hexData.overview.split('\n').map((item, key) => {
                        return (
                            <p className="para" key={key}>
                                {item}
                                <br />
                                <br />
                            </p>
                        );
                    })}
                </div>
            </>
        );
    }
}

export default Hexagram;
