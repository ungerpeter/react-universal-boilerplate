import React from 'react';

const HelloWorld = ({ world }) => (
  <div>Hello {world}</div>
);

HelloWorld.defaultProps = {
  world: 'World',
};

export default HelloWorld;

