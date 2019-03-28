import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Button from './forms/button';
import Label from './forms/label';
import Input from './forms/input';
import TextArea from './forms/textarea';
import Form from './forms/regular_form';
import Dropdown from './forms/dropdown';

import ReviewForm from './reviews/review_form';
import StarRating from './reviews/star_rating';
import ReviewItem from './reviews/review_item';

import SessionForm from './session_form/form';

import NavBar from './nav_bar/nav_bar';

// form module
storiesOf('Forms', module)
  .add('Regular Form', Form)
  .add('Button', Button)
  .add('Label', Label)
  .add('Input', Input)
  .add('TextArea', TextArea)
  .add('Dropdown', Dropdown)

// reviews module
storiesOf('Reviews', module)
  .add('Review Form', ReviewForm)
  .add('StarRating', StarRating)
  .add('ReviewItem', ReviewItem)
  // .add('Review List', ReviewList)

storiesOf('Session Form', module)
  .add('Session Form', SessionForm)

storiesOf('Nav Bar', module)
  .add('Bar', NavBar)