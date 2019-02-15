import React from 'react'
import renderer from 'react-test-renderer'
import Clients from './Clients';

describe('clients snapshot tests', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Clients/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
