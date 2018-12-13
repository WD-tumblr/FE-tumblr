import React from 'react';
import { shallow } from 'enzyme';
import Logo from '../Logo';
import SearchForm from '../SearchForm';
import NavigationBar from '../NavigationBar';
import Header from './Header';
describe('DashBorad', () => {
  it('should render has Logo, SearchForm, NavigationBar ', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find(Logo).length).toBe(1);
    expect(wrapper.find(SearchForm).length).toBe(1);
    expect(wrapper.find(NavigationBar).length).toBe(1);
  });
});
