import { assert } from 'chai';
import { isBlank } from '.';

describe('Utils', () => {
  it('should call isBlank()', () => {
    assert.isTrue(isBlank(undefined), 'Expecting undefined to return true');
    assert.isTrue(isBlank(null), 'Expecting enull to return true');
    assert.isTrue(isBlank(''), 'Expecting empty string to return true');
    assert.isTrue(isBlank([]), 'Expecting empty array to return true');
    assert.isTrue(isBlank({}), 'Expecting empty object to return true');

    assert.isFalse(isBlank(0), 'Expecting zero to return false');
    assert.isFalse(isBlank('value'), 'Expecting string to return false');
    assert.isFalse(isBlank(['value']), 'Expecting array of values to return false');
    assert.isFalse(isBlank({ value: 'value' }), 'Expecting object with values to return false');
    assert.isFalse(isBlank(() => {}), 'Expecting function to return false');
  });
});
