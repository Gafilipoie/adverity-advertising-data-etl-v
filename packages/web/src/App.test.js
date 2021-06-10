import React from 'react';
import { shallow } from 'enzyme';
import { assert } from 'chai';
import App from './App';

describe('App Component', () => {
  it('should render App component', () => {
    const wrapper = shallow(<App />);
    assert.lengthOf(wrapper.find('.App'), 1, 'Expecting App to be found');
    assert.lengthOf(wrapper.find('.App .content'), 1, 'Expecting .content to be found');
    assert.lengthOf(wrapper.find('.App .content Dashboard'), 1, 'Expecting Dashboard to be found');
  });
});
