import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AppProps } from './App.types';
import { AppWrapper } from './App.style';
import { withErrorBoundary } from '../withErrorBoundary';
import Home from '../Home/Home';
import Users from '../Users/Users';

function App(props: AppProps) {
    return (
        <AppWrapper data-testid={'App-wrapper'}>
            <Router>
                {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/users">
                        <Users />
                    </Route>
                    <Route path="*">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </AppWrapper>
    );
}

export default withErrorBoundary(App);
