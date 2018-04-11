import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import HelloWorld from '../../atoms/HelloWorld';

test('Component gets rendered', () => {
  const component = renderer.create(<HelloWorld />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Custom word gets rendered from props', () => {
  const component = shallow(<HelloWorld world="foo" />);
  expect(component.text()).toEqual('Hello foo');
});
