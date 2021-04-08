/* eslint-disable no-undef */
const sl = require('../src/index.js');

const HELLO = 'hello';
const WORLD = 'WORLD';
const EMPTY = '';
const FOOBAR = 'foo bar';
const LOREM = 'lorem ipsum dolor';

test('sanity check', () => {
  expect(2 + 2).toBe(4);
});

test('upperFirst', () => {
  expect(sl.upperFirst(HELLO)).toBe('Hello');
  expect(sl.upperFirst(WORLD)).toBe('WORLD');
  expect(sl.upperFirst(EMPTY)).toBe('');
  expect(sl.upperFirst(FOOBAR)).toBe('Foo bar');
});

test('allCaps', () => {
  expect(sl.allCaps(HELLO)).toBe('HELLO');
  expect(sl.allCaps(WORLD)).toBe('WORLD');
  expect(sl.allCaps(EMPTY)).toBe('');
  expect(sl.allCaps(FOOBAR)).toBe('FOO BAR');
  expect(sl.allCaps('What!')).toBe('WHAT!');
});

test('capitalizeWords', () => {
  expect(sl.capitalizeWords(HELLO)).toBe('Hello');
  expect(sl.capitalizeWords(WORLD)).toBe('WORLD');
  expect(sl.capitalizeWords(EMPTY)).toBe('');
  expect(sl.capitalizeWords(FOOBAR)).toBe('Foo Bar');
});

test('removeExtraSpace', () => {
  expect(sl.removeExtraSpace(HELLO)).toBe('hello');
  expect(sl.removeExtraSpace('  hello world   ')).toBe('hello world');
  expect(sl.removeExtraSpace(EMPTY)).toBe('');
});

test('kebabCase', () => {
  expect(sl.kebabCase(HELLO)).toBe('hello');
  expect(sl.kebabCase(EMPTY)).toBe('');
  expect(sl.kebabCase(FOOBAR)).toBe('foo-bar');
  expect(sl.kebabCase(LOREM)).toBe('lorem-ipsum-dolor');
});

test('snakeCase', () => {
  expect(sl.snakeCase(HELLO)).toBe('hello');
  expect(sl.snakeCase(EMPTY)).toBe('');
  expect(sl.snakeCase(FOOBAR)).toBe('foo_bar');
  expect(sl.snakeCase(LOREM)).toBe('lorem_ipsum_dolor');
});

test('camelCase', () => {
  expect(sl.camelCase(HELLO)).toBe('hello');
  expect(sl.camelCase(EMPTY)).toBe('');
  expect(sl.camelCase(FOOBAR)).toBe('fooBar');
  expect(sl.camelCase(LOREM)).toBe('loremIpsumDolor');
});

test('shift', () => {
  expect(sl.shift(HELLO)).toBe('elloh');
  expect(sl.shift(WORLD)).toBe('ORLDW');
  expect(sl.shift(EMPTY)).toBe('');
  expect(sl.shift(FOOBAR)).toBe('oo barf');
});

test('makeHashTag', () => {
  expect(sl.makeHashTag('Amazing bongo drums for sale')).toEqual(['#Amazing', '#Bongo', '#Drums']);
  expect(sl.makeHashTag('MakeSchool College SF 21st')).toEqual(['#MakeSchool', '#College', '#SF']);
});

test('isEmpty', () => {
  expect(sl.isEmpty(HELLO)).toBe(false);
  expect(sl.isEmpty(WORLD)).toBe(false);
  expect(sl.isEmpty(EMPTY)).toBe(true);
  expect(sl.isEmpty('   ')).toBe(true);
});
