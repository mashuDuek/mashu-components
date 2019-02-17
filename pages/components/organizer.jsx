import React from 'react';
import { Route, HashRouter } from 'react-router-dom';

import Form from '../../src/stories/forms/regular_form';
import Review from '../../src/stories/reviews/review_item';
import ReviewForm from '../../src/stories/reviews/review_form';
import StarRating from '../../src/stories/reviews/star_rating';

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
                    <Route component={Form} path="/form"></Route>
                    <Route component={Review} path="/review"></Route>
                    <Route component={ReviewForm} path="/review-form"></Route>
                    <Route component={StarRating} path="/star-rating"></Route>
                    <div id="file-code">
                    </div>
                </div>
            </div>
        </div>
    </HashRouter>
);