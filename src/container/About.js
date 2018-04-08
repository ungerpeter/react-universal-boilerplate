import React, { Component, Fragment } from 'react';
import HelloWorld from '../components/atoms/HelloWorld';

export default class About extends Component {
  render() {
    return (
      <Fragment>
        <HelloWorld />
        <HelloWorld />
        <HelloWorld />
      </Fragment>
    );
  }
}