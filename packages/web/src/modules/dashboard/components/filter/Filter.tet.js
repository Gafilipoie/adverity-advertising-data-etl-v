import React from 'react';
import { shallow } from 'enzyme';
import { assert } from 'chai';
import Filter from './Filter';

describe('Filter Component', () => {
  it('should render Filter component', () => {
    const wrapper = shallow(<Filter />);
    assert.lengthOf(wrapper.find('StyledFilter'), 1, 'Expecting StyledFilter to be found');
  });

  it('should render .datasources block', () => {
    const wrapper = shallow(<Filter />);
    assert.lengthOf(wrapper.find('StyledFilter .dataSources'), 1, 'Expecting .dataSources to be found');
    assert.lengthOf(wrapper.find('StyledFilter .dataSources h3'), 1, 'Expecting h3 to be found');
    assert.equal(wrapper.find('StyledFilter .dataSources h3').text(), 'DataSource', 'Expecting h3 to render corect children');
    assert.lengthOf(wrapper.find('StyledFilter .dataSources Select'), 1, 'Expecting Select component to be found');
    assert.equal(wrapper.find('StyledFilter .dataSources Select').props().placeholder, 'All', 'Expecting Select placeholder to render corect text');
    assert.isFunction(wrapper.find('StyledFilter .dataSources Select').props().onChange, 'Expecting Select onChange to be function');
  });

  it('should render .campaigns block', () => {
    const wrapper = shallow(<Filter />);
    assert.lengthOf(wrapper.find('StyledFilter .campaigns'), 1, 'Expecting .campaigns to be found');
    assert.lengthOf(wrapper.find('StyledFilter .campaigns h3'), 1, 'Expecting h3 to be found');
    assert.equal(wrapper.find('StyledFilter .campaigns h3').text(), 'Campaign', 'Expecting h3 to render corect children');
    assert.lengthOf(wrapper.find('StyledFilter .campaigns Select'), 1, 'Expecting Select component to be found');
    assert.equal(wrapper.find('StyledFilter .campaigns Select').props().placeholder, 'All', 'Expecting Select placeholder to render corect text');
    assert.isFunction(wrapper.find('StyledFilter .campaigns Select').props().onChange, 'Expecting Select onChange to be function');
  });

  it('should render .apply-wrapper block', () => {
    const wrapper = shallow(<Filter />);
    assert.lengthOf(wrapper.find('StyledFilter .apply-wrapper'), 1, 'Expecting .apply-wrapper to be found');
    assert.lengthOf(wrapper.find('StyledFilter .apply-wrapper Button'), 1, 'Expecting Button to be found');
    assert.isFunction(wrapper.find('StyledFilter .apply-wrapper Button').props().action, 'Expecting Button action to be function');
    assert.equals(wrapper.find('StyledFilter .apply-wrapper Button').text(), 'Apply', 'Expecting Button to render corect children');
  });
});
