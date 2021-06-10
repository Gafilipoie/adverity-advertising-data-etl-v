import React from 'react';
import { shallow } from 'enzyme';
import { assert } from 'chai';
import * as R from 'ramda';
import APP_CONFIG from '@adverity/config';
import AppProvider from './AppProvider';

const baseTheme = R.path(['theme', 'base'], APP_CONFIG);

describe('AppProvider Component', () => {
  it('should render AppProvider component', () => {
    const wrapper = shallow(<AppProvider />);
    assert.lengthOf(wrapper, 1, 'Expecting ThemeProvider to be found');
    assert.deepEqual(wrapper.props().theme, baseTheme, 'Expecting theme object to be found');
    assert.lengthOf(wrapper.find('App'), 1, 'Expecting App to be found');
  });
});
