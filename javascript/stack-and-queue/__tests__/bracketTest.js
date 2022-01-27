'use strict';

const validateBrackets = require('../brackets');

describe('balanced brackets', () => {
  it('returns true when it can find matching closing brackets for all open brackets', () => {
    expect(validateBrackets('{}')).toBe(true);
    expect(validateBrackets('{}(){}')).toBe(true);
    expect(validateBrackets('()[[Extra Characters]]')).toBe(true);
    expect(validateBrackets('(){}[[]]')).toBe(true);
    expect(validateBrackets('{}{Seattle}[Washington](())')).toBe(true);
  });
  it('returns false when it cannott find a matching closing bracket to an open bracket.', () => {
    expect(validateBrackets('[({}]')).toBe(false);
    expect(validateBrackets('(](')).toBe(false);
    expect(validateBrackets('{')).toBe(false);
    expect(validateBrackets(')')).toBe(false);
    expect(validateBrackets('[}')).toBe(false);
  });
});
