import React, { Fragment } from 'react';
import { Button } from 'antd';
import HelloWorld from '../components/atoms/HelloWorld';

const Home = () => (
  <Fragment>
    <HelloWorld />
    <Button type="primary">Primary Button</Button>
  </Fragment>
);

export default Home;
