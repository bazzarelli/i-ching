import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <header className="py-4">
                <h1 className="text-5xl text-grey-darker mt-3 text-center">{this.props.heading}</h1>
                <h2 className="text-center font-thin text-frost mt-4 tracking-wide">{this.props.subHeading}</h2>
            </header>
        );
    }
}

export default Header;
