import React from 'react';
import { Route, HashRouter } from 'react-router-dom';

import LandingPage from './landing_page';

import FormCreator from './component_setup/forms/new_form';
import InputCreator from './component_setup/input/input_creator';
import TextAreaCreator from './component_setup/textarea/textarea_creator';

// import Input from '../../src/stories/forms/input';
// import TextArea from '../../src/stories/forms/textarea';
import Button from '../../src/stories/forms/button';

import Review from '../../src/stories/reviews/review_item';
import ReviewForm from '../../src/stories/reviews/review_form';
import StarRating from '../../src/stories/reviews/star_rating';

import RoutingBar from './routing_bar';
import NavBar from './navbar';

export default () => (
    <HashRouter>
        <div className="main">
            <NavBar></NavBar>
            <div className="routing-and-comps">
                <RoutingBar></RoutingBar>
                <div className="components">
                    <Route component={LandingPage} exact path="/"></Route>
                    <Route component={FormCreator} path="/form"></Route>
                    <Route component={InputCreator} path="/input"></Route>
                    <Route component={TextAreaCreator} path="/textarea"></Route>
                    <Route component={Button} path="/button"></Route>
                    <Route component={Review} path="/review"></Route>
                    <Route component={ReviewForm} path="/review-form"></Route>
                    <Route component={StarRating} path="/star-rating"></Route>
                </div>
            </div>
        </div>
    </HashRouter>
);