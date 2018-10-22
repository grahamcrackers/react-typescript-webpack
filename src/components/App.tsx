/* eslint-disable import/no-named-as-default */
import * as React from 'react';
import { hot } from 'react-hot-loader';
import { NavLink, Route, Switch } from 'react-router-dom';
import AboutPage from './AboutPage';
import FuelSavingsPage from './containers/FuelSavingsPage';
import HomePage from './HomePage';
import NotFoundPage from './NotFoundPage';
import TypeSafeActionsPage from './containers/TypeSafeActionsPage';

interface AppProps {
    children?: React.ReactChildren;
}
// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component<AppProps> {
    public render() {
        const activeStyle = { color: 'blue' };

        return (
            <div>
                <div>
                    <NavLink exact to="/" activeStyle={activeStyle}>
                        Home
                    </NavLink>
                    {' | '}
                    <NavLink to="/fuel-savings" activeStyle={activeStyle}>
                        Demo App
                    </NavLink>
                    {' | '}
                    <NavLink to="/about" activeStyle={activeStyle}>
                        About
                    </NavLink>
                    {' | '}
                    <NavLink to="/type-safe-actions" activeStyle={activeStyle}>
                        TypeSafe Actions
                    </NavLink>
                </div>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/fuel-savings" component={FuelSavingsPage} />
                    <Route path="/about" component={AboutPage} />
                    <Route path="/type-safe-actions" component={TypeSafeActionsPage} />
                    <Route component={NotFoundPage} />
                </Switch>
            </div>
        );
    }
}

export default hot(module)(App);
