import React from 'react';
import renderer from 'react-test-renderer';
import ArticlePage from '../index';

describe('Article Page', () => {
  it('should render a container', () => {
    const tree = renderer
      .create(<ArticlePage />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
