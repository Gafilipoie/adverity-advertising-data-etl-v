import * as R from 'ramda';

export * from './testHelpers';

export const isBlank = p => R.isNil(p) || R.isEmpty(p);
