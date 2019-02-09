import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';


import Button from './forms/button';
import Form from './forms/regular_form';
import ReviewForm from './reviews/review_form';
// import ReviewList from './reviews/review_list';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

// form module
storiesOf('Form', module)
  .add('Regular Form', Form)
  .add('Button', Button)

// reviews module
storiesOf('Reviews', module)
  .add('Review Form', ReviewForm)
  // .add('Review List', ReviewList)