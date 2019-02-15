import React from 'react'
import renderer from 'react-test-renderer'
import Contacts from './Contacts';

describe('contacts snapshot tests', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Contacts/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
