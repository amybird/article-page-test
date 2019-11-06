import React from 'react';
import renderer from 'react-test-renderer';
import Quote from '../index';

describe('Quote', () => {
  it('should render a quote', () => {
    const tree = renderer
      .create(<Quote text="Testing a quote" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
