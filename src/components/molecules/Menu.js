import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

export default class MyMenu extends Component {

  render() {
    return (
      <Menu
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        mode="inline"
      >
        <Menu.Item key="1"><Link to={'/'} >Home</Link></Menu.Item>
        <Menu.Item key="2"><Link to={'/about'} >About</Link></Menu.Item>
        <Menu.Item key="3"><Link to={'/foobar'} >Non existing page</Link></Menu.Item>
      </Menu>
    );
  }
}