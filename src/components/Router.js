import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import IChingBegin from './IChingBegin';
import NotFound from './NotFound';

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route
                    exact
                    path="/build-your-hexagram"
                    component={IChingBegin}
                />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
}

export default Router;
