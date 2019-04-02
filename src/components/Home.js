import React from 'react';
import Header from './Header';
import App from './App';

function Home() {
    const conditional = true;

    return (
        <>
            <Header
                heading="i-ching for beginners"
                subHeading="guidance from the ancient oracle"
            />
            <App />
        </>
    );
}

export default Home;
