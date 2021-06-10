import React from 'react';
import { shallow } from 'enzyme';
import { assert } from 'chai';
import Select from './Select';

describe('Select Component', () => {
  const props = {
    label: false,
    placeholder: 'Select Placeholder',
    options: ['item1', 'item2'],
    onChange: jest.fn(),
  };

  it('should render Select component', () => {
    const wrapper = shallow(<Select {...props} />);
    assert.lengthOf(wrapper.find('StateManager'), 1, 'Expecting Select to be found');
    assert.isFalse(wrapper.find('StateManager').props().closeMenuOnSelect, 'Expecting Select to not close on selection');
    assert.isTrue(wrapper.find('StateManager').props().isMulti, 'Expecting Select to be multi select');
    assert.isTrue(wrapper.find('StateManager').props().clearable, 'Expecting Select to be clearable');
    assert.equal(wrapper.find('StateManager').props().placeholder, props.placeholder, 'Expecting Select to render correct placeholder');
  });

  it('should call action on click', () => {
    const wrapper = shallow(<Select {...props} />);
    wrapper.find('StateManager').simulate('change', () => {});
    expect(props.onChange).toHaveBeenCalled();
  });
});
