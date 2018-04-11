import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

const MyMenu = () => (
  <Menu
    style={{ width: 256 }}
    defaultSelectedKeys={['1']}
    mode="inline"
  >
    <Menu.Item key="1"><Link href="/" to="/" >Home</Link></Menu.Item>
    <Menu.Item key="2"><Link href="/about" to="/about" >About</Link></Menu.Item>
    <Menu.Item key="3"><Link href="/foobar" to="/foobar" >Non existing page</Link></Menu.Item>
  </Menu>
);

export default MyMenu;
