import React from 'react';
import renderer from 'react-test-renderer';
import Paragraph from '../index';

describe('Paragraph', () => {
  it('renders a paragraph', () => {
    const tree = renderer
      .create(<Paragraph>Testing a paragraph wrapper</Paragraph>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
