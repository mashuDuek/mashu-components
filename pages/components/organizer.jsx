import React from 'react';
import { Route, Router, Redirect, withRouter } from 'react-router-dom';
import Form from './forms/form';
// import Forms from '../../src/packages/forms/regular_form';

export default () => (
    <Router>
        <Route component={Form} path="/form"></Route>
    </Router>
);