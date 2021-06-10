import { assert } from 'chai';
import { trasnformData, getConfig } from './helpers';
import { mockData, transformedMockData } from './__fixtures__';

describe('Chart helpers', () => {
  describe('trasnformData()', () => {
    it('should call trasnformData()', () => {
      const data = trasnformData(mockData);
      assert.deepEqual(
        data,
        transformedMockData,
        'Expecting trasnformData() to return transformed date'
      );
    });
  });

  describe('getConfig()', () => {
    it('should call getConfig()', () => {
      const {
        width,
        height,
        margin,
        valueline,
        valueline2,
        xAxis,
        yAxisLeft,
        yAxisRight,
        x,
      } = getConfig(mockData);
      assert.equal(width, 820, 'Expecting width to be defined');
      assert.equal(height, 430, 'Expecting height to be defined');
      assert.deepEqual(
        margin,
        { top: 20, right: 70, bottom: 50, left: 70 },
        'Expecting margin to be defined'
      );
      assert.isFunction(valueline, 'Expecting valueline to be a function');
      assert.isFunction(valueline2, 'Expecting valueline2 to be a function');
      assert.isFunction(xAxis, 'Expecting xAxis to be a function');
      assert.isFunction(yAxisLeft, 'Expecting yAxisLeft to be a function');
      assert.isFunction(yAxisRight, 'Expecting yAxisRight to be a function');
      assert.isFunction(x, 'Expecting x to be a function');
    });
  });
});
