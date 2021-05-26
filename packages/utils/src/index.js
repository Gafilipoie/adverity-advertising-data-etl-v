import * as R from 'ramda';

export const isBlank = p => R.isNil(p) || R.isEmpty(p);
