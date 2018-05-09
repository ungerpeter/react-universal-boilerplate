import React, { Fragment } from 'react';
import { hot } from 'react-hot-loader';
import HelloWorld from '../components/atoms/HelloWorld';

const About = () => (
  <Fragment>
    <HelloWorld />
    <HelloWorld />
    <HelloWorld />
  </Fragment>
);

export default hot(module)(About);
