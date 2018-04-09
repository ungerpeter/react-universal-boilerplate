import React, { Component, Fragment } from 'react';
import { Button } from 'antd';
import HelloWorld from '../components/atoms/HelloWorld';

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <HelloWorld />
        <Button type={'primary'}>Primary Button</Button>
      </Fragment>
    );
  }
}