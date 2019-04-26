import React from 'react';
import { Link } from 'react-router-dom';
class Header extends React.Component {
    render() {
        return (
            <header className="py-4 bg-black">
                <h1>
                    <Link
                        className="block no-underline text-4xl md:text-5xl text-lead mt-3 text-center"
                        to="/"
                    >
                        I Ching for Beginners
                    </Link>
                </h1>
                <h3 className="text-base md:text-xl text-center font-thin text-grey-dark mt-4 tracking-wide">
                    guidance from the ancient oracle
                </h3>
            </header>
        );
    }
}

export default Header;
