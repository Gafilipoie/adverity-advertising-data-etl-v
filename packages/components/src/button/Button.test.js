import React from 'react';
import { shallow } from 'enzyme';
import { assert } from 'chai';
import Button from './Button';

describe('Button Component', () => {
  it('should render Button component', () => {
    const props = {
      disabled: false,
      action: jest.fn(),
    };
    const wrapper = shallow(<Button {...props}>Button Text</Button>);
    assert.lengthOf(wrapper.find('StyledButton'), 1, 'Expecting Button to be found');
  });

  it('should render Button as disabled', () => {
    const props = {
      disabled: true,
      action: jest.fn(),
    };
    const wrapper = shallow(<Button {...props}>Button Text</Button>);
    assert.isTrue(wrapper.find('StyledButton').props().disabled, 'Expecting Button to be disabled');
  });

  it('should call action on click', () => {
    const props = {
      disabled: false,
      action: jest.fn(),
    };
    const wrapper = shallow(<Button {...props}>Button Text</Button>);
    wrapper.find('StyledButton').simulate('click', () => {});
    expect(props.action).toHaveBeenCalled();
  });

  it('should render children', () => {
    const props = {
      disabled: false,
      action: jest.fn(),
    };
    const wrapper = shallow(<Button {...props}>Button Text</Button>);
    assert.equal(
      wrapper.find('StyledButton').text(),
      'Button Text',
      'Expecting Button to render corect children'
    );
  });
});
