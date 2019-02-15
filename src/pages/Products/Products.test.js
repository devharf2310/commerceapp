import React from 'react'
import renderer from 'react-test-renderer'
import Products from './Products';

describe('Products snapshot tests', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Products/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
