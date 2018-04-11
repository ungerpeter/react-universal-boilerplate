import React from 'react';
import { storiesOf } from '@storybook/react';
import { withMarkdownNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';
import { withTests } from '@storybook/addon-jest';
import { checkA11y } from '@storybook/addon-a11y';
import results from '../../../.storybook/results.jest';
import HelloWorld from '../../components/atoms/HelloWorld';

const info = {};

const notes = `
# Hello World

Usage:

~~~js
<div>
  <HelloWorld world={<String>} />
</div>
~~~
`;

storiesOf('Atoms/HelloWorld', module)
  .addDecorator(checkA11y)
  .addDecorator(withTests({ results })('HelloWorld'))
  .add('HelloWorld',
    withInfo(info)(
    withMarkdownNotes(notes)(
      () => <HelloWorld />
    )));