import React from 'react'
import renderer from 'react-test-renderer'
import MockRouter from 'react-mock-router';
import MenuTabs from './MenuTabs'

describe('Tabs snapshot tests', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<MockRouter><MenuTabs/></MockRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
