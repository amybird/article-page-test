import React from 'react';
import Container from './Container';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

it('renders a container', () => {
  const tree = renderer
    .create(<Container>Testing a Container wrapper</Container>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
