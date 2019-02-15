import React from 'react'
import renderer from 'react-test-renderer'
import Routes from './Routes';
import MockRouter from 'react-mock-router';

const location = { key: ''};
describe('routes snapshot tests', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<MockRouter location={location}><Routes location={location}/></MockRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
