import React from 'react';
import { shallow } from 'enzyme';
import DashBoard from './DashBoard';
describe('DashBorad', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<DashBoard debug />);

    expect(component).toMatchSnapshot();
  });
});
