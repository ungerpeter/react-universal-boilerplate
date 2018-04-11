import React from 'react';
import HelloWorld from '../../atoms/HelloWorld';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

test('Component gets rendered', () => {
  const component = renderer.create(<HelloWorld />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Custom word gets rendered from props', () => {
  const component = shallow(<HelloWorld world={'foo'} />);
  expect(component.text()).toEqual('Hello foo');
});