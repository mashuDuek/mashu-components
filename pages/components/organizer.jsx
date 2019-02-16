import React from 'react';
import { Route, HashRouter, Redirect } from 'react-router-dom';
// import Form from './forms/form';
import Forms from '../../src/stories/forms/regular_form';

export default () => (
    <HashRouter>
        <a href="/form">Form</a>
        <Route component={Forms} path="/form"></Route>
    </HashRouter>
);