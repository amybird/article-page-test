import React from 'react';
import ResponsiveImage from './ResponsiveImage.js';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import 'jest-styled-components';

it('renders without source tag for smallImg only', () => {
  const tree = renderer
    .create(<ResponsiveImage smallImg="test" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders with source tag when largeImg', () => {  
  const ResponsiveImageComponent = mount(<ResponsiveImage smallImg="test" largeImg="sddsFS" />);
     expect(ResponsiveImageComponent.find('source'));
});
