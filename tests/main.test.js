'use strict';

const FizzBuzz = require('../main.js');
const expected1 = [1, 2, 'Fizz', 4, 'Buzz'];
const expected2 = [1, 'Fizz', 3, 'Fizz', 'Buzz'];

test('arr length is 5',  () => {
  expect(FizzBuzz(expected1.length, 3, 5)).toHaveLength(expected1.length);
});

test('i % 3 == 0 replace by 3, i % 5 == 0 replace by 5',  () => {
    expect(FizzBuzz(5, 3, 5)).toEqual(expected1);

});

test('i % 2 == 0 replace by 2, i % 5 == 0 replace by 5',  () => {
    expect(FizzBuzz(5, 2, 5)).toEqual(expected2);
});
