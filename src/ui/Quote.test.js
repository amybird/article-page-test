import React from 'react';
import Quote from './Quote.js';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

it('renders a quote', () => {
  const tree = renderer
    .create(<Quote>Testing a quote</Quote>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
