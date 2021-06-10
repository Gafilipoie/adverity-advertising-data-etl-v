import React from 'react';
import { shallow } from 'enzyme';
import { assert } from 'chai';
import Chart from './Chart';
import { mockData } from './__fixtures__';

describe('Chart Component', () => {
  const props = {
    data: mockData,
  };

  it('should render Chart component', () => {
    const wrapper = shallow(<Chart {...props} />);
    assert.lengthOf(wrapper.find('svg'), 1, 'Expecting Chart to render svg');
    assert.lengthOf(wrapper.find('svg .container'), 1, 'Expecting Chart to render .container');
    assert.lengthOf(
      wrapper.find('svg .container .valueLine-1'),
      1,
      'Expecting Chart to render .valueLine-1'
    );
    assert.lengthOf(
      wrapper.find('svg .container .valueLine-2'),
      1,
      'Expecting Chart to render .valueLine-2'
    );
    assert.lengthOf(wrapper.find('svg .container .x-axis'), 1, 'Expecting Chart to render .x-axis');
    assert.lengthOf(
      wrapper.find('svg .container .x-axis-label'),
      1,
      'Expecting Chart to render .x-axis-label'
    );
    assert.lengthOf(
      wrapper.find('svg .container .x-axis-label-clicks-line'),
      1,
      'Expecting Chart to render .x-axis-label-clicks-line'
    );
    assert.lengthOf(
      wrapper.find('svg .container .x-axis-label-clicks'),
      1,
      'Expecting Chart to render .x-axis-label-clicks'
    );
    assert.lengthOf(
      wrapper.find('svg .container .x-axis-label-impressions-line'),
      1,
      'Expecting Chart to render .x-axis-label-impressions-line'
    );
    assert.lengthOf(
      wrapper.find('svg .container .x-axis-label-impressions'),
      1,
      'Expecting Chart to render .x-axis-label-impressions'
    );
    assert.lengthOf(
      wrapper.find('svg .container .y-left-axis-label'),
      1,
      'Expecting Chart to render .y-left-axis-label'
    );
    assert.lengthOf(
      wrapper.find('svg .container .y-left-axis'),
      1,
      'Expecting Chart to render .y-left-axis'
    );
    assert.lengthOf(
      wrapper.find('svg .container .y-right-axis-label'),
      1,
      'Expecting Chart to render .y-right-axis-label'
    );
    assert.lengthOf(
      wrapper.find('svg .container .y-right-axis'),
      1,
      'Expecting Chart to render .y-right-axis'
    );
  });
});
