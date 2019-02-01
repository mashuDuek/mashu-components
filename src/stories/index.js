import React from 'react';
import Form from './forms/regular_form';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

// form module
storiesOf('Form', module)
  .add('Regular Form', () => (
    <Form ></Form>
  ))
