import React from 'react';
import { Route, HashRouter, Link } from 'react-router-dom';
// import Form from './forms/form';
import Forms from '../../src/stories/forms/regular_form';
import RoutingBar from './routing/bar';

export default () => (
    <HashRouter>
        <div className="main">
            <RoutingBar></RoutingBar>
            <div className="components">
                <Route component={Forms} path="/form"></Route>
            </div>
        </div>
    </HashRouter>
);