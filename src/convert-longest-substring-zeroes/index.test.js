const convertLongestSubstring = require('./index');

describe('convertLongestSubstring() Tests', () => {
  test('converts 00100010100101 to 001###10100101', () => {
    expect(convertLongestSubstring('00100010100101')).toBe('001###10100101');
  });

  test('converts 1111111 to 1111111', () => {
    expect(convertLongestSubstring('1111111')).toBe('1111111');
  });

  test('converts 0000000 to #######', () => {
    expect(convertLongestSubstring('0000000')).toBe('#######');
  });

  test('converts empty string to empty string', () => {
    expect(convertLongestSubstring('')).toBe('');
  });

  test('converts 1001 to 1##1', () => {
    expect(convertLongestSubstring('1001')).toBe('1##1');
  });

  test('converts 1010010 to 101##10', () => {
    expect(convertLongestSubstring('1010010')).toBe('101##10');
  });

  test('converts 000110 to ###110', () => {
    expect(convertLongestSubstring('000110')).toBe('###110');
  });

  test('converts 110000 to 11####', () => {
    expect(convertLongestSubstring('110000')).toBe('11####');
  });

  test('converts 0 to #', () => {
    expect(convertLongestSubstring('0')).toBe('#');
  });

  test('converts 1 to 1', () => {
    expect(convertLongestSubstring('1')).toBe('1');
  });

  test('converts 0000 to ####', () => {
    expect(convertLongestSubstring('0000')).toBe('####');
  });

  test('converts 101010 to 1#1010', () => {
    expect(convertLongestSubstring('101010')).toBe('1#1010');
  });
});
