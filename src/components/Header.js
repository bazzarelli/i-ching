import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <header className="py-4">
                <h1 className="text-center text-nightfall">{this.props.heading}</h1>
                <h3 className="text-center text-nightfall">{this.props.tagline}</h3>
            </header>
        );
    }
}

export default Header;
