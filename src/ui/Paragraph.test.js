import React from 'react';
import Paragraph from './Container';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

it('renders a paragraph', () => {
  const tree = renderer
    .create(<Paragraph>Testing a paragraph wrapper</Paragraph>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
