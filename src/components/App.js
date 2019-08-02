import React from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import IChingBegin from './IChingBegin';

const App = () => (
    <div>
        <Header />
        <main>
            <Route exact path="/" component={Home} />
            <Route exact path="/build-your-hexagram" component={IChingBegin} />
        </main>
    </div>
);

export default App;
