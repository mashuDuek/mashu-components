import React from 'react';
import { Route, HashRouter, Link } from 'react-router-dom';
// import Form from './forms/form';
import Forms from '../../src/stories/forms/regular_form';
import RoutingBar from './routing/bar';
import NavBar from './navbar';

export default () => (
    <HashRouter>
        <div className="main">
            <NavBar></NavBar>
            <div className="routing-and-comps">
                <RoutingBar></RoutingBar>
                <div className="components">
                    <h1>Component</h1>
                    <Route component={Forms} path="/form"></Route>
                </div>
            </div>
        </div>
    </HashRouter>
);