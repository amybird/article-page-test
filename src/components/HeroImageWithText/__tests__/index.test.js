import React from 'react';
import renderer from 'react-test-renderer';
import HeroImageWithText from '../index';
import { data } from '../../../data/article';

describe('Container', () => {
  it('should render a container', () => {
    const tree = renderer
      .create(<HeroImageWithText data={data.content[0]} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
