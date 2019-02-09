import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Button from './forms/button';
import Label from './forms/label';
import Input from './forms/input';
import TextArea from './forms/textarea';
import Form from './forms/regular_form';

import ReviewForm from './reviews/review_form';

// form module
storiesOf('Form', module)
  .add('Regular Form', Form)
  .add('Button', Button)
  .add('Label', Label)
  .add('Input', Input)
  .add('TextArea', TextArea)

// reviews module
storiesOf('Reviews', module)
  .add('Review Form', ReviewForm)
  // .add('Review List', ReviewList)