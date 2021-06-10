import React from 'react';
import { shallow } from 'enzyme';
import { assert } from 'chai';
import Dashboard from './Dashboard';

describe('Dashboard Component', () => {
  it('should render Dashboard component', () => {
    const wrapper = shallow(<Dashboard />);
    assert.lengthOf(wrapper.find('ContextProvider'), 1, 'Expecting ContextProvider to be found');
    assert.lengthOf(wrapper.find('ContextProvider StyleDashboard'), 1, 'Expecting StyleDashboard to be found');
    assert.lengthOf(wrapper.find('ContextProvider StyleDashboard Filter'), 1, 'Expecting Filter component to be found');
    assert.lengthOf(wrapper.find('ContextProvider StyleDashboard Metric'), 1, 'Expecting Metric component to be found');
  });
});
