import React from 'react';
import { shallow } from 'enzyme';
import DashBoard from './DashBoard';
import Header from './components/Header';
describe('DashBorad', () => {
  it('should render has <Header/>', () => {
    const wrapper = shallow(<DashBoard />);
    expect(wrapper.find(Header).length).toBe(1);
  });
});
