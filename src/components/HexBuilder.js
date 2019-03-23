import React from "react";
const images = require.context("../images", true);
// import HexLine from './HexLine';

class HexBuilder extends React.Component {
  render() {
    const hexVisibility = {
      display: this.props.question ? "block" : "none"
    };
    const currentId = this.props.currentHexId;
    const currentHexId = `hex${currentId}`;
    const hexData = this.props.allHexes[currentHexId];
    const imgSrc = images(`./hexagrams/svg/${currentId}.svg`);

    return (
      <div style={hexVisibility}>
        <p className="rounded-lg mt-2 w-8 h-8 flex items-center justify-center bg-grey-lighter text-grey-darkest font-semibold">
          {currentId}
        </p>
        <h2 className="text-slate">{hexData.name}</h2>
        <img
          className="w-1/2 hexagram-glyph"
          src={imgSrc}
          alt={"hexagram " + this.props.currentHexId}
        />
        <p className="text-slate">{hexData.desc}</p>
      </div>
    );
  }
}

export default HexBuilder;
