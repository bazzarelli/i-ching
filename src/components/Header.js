import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <header className="py-4">
                <h1 className="text-4xl md:text-5xl text-grey-darker mt-3 text-center">
                    {this.props.heading}
                </h1>
                <h3 className="text-base md:text-2xl text-center font-thin text-grey-darker mt-4 tracking-wide">
                    {this.props.subHeading}
                </h3>
            </header>
        );
    }
}

export default Header;
