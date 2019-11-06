import React from 'react';
import renderer from 'react-test-renderer';
import StickyImageWithText from '../index';
import { data } from '../../../data/article';

describe('Container', () => {
  it('should render a container', () => {
    const tree = renderer
      .create(<StickyImageWithText data={data.content[1]} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
