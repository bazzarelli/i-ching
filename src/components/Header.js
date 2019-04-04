import React from 'react';
import { Link } from 'react-router-dom';
class Header extends React.Component {
    render() {
        return (
            <header className="py-4">
                <h1>
                    <Link
                        className="block no-underline text-4xl md:text-5xl text-grey-darker mt-3 text-center"
                        to="/"
                    >
                        {this.props.heading}
                    </Link>
                </h1>
                <h3 className="text-base md:text-xl text-center font-thin text-grey-darker mt-4 tracking-wide">
                    {this.props.subHeading}
                </h3>
            </header>
        );
    }
}

export default Header;
