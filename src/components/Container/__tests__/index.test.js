import React from 'react';
import renderer from 'react-test-renderer';
import Container from '../index';

describe('Container', () => {
  it('should render a container', () => {
    const tree = renderer
      .create(<Container>Testing a Container wrapper</Container>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
