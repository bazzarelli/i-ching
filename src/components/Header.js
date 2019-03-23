import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header className="py-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-grey-darker mt-3 text-center">
          {this.props.heading}
        </h1>
        <h3 className="text-center font-thin text-grey-light mt-4 tracking-wide">
          {this.props.subHeading}
        </h3>
      </header>
    );
  }
}

export default Header;
