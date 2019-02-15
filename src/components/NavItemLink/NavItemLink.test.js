import React from 'react'
import renderer from 'react-test-renderer'
import MockRouter from 'react-mock-router';
import NavLink from './NavItemLink'

const props = {
    exact: true,
    label: "All",
    to: "/products",
    icon: "format_list_bulleted"
}


describe('Nav Item Link snapshot tests', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<MockRouter><NavLink {...props} key={props.to} /></MockRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
