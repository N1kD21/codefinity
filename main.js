'use strict';

/*
What is the FizzBuzz kata?
    Print integers (numbers) 1 to N (e.g. N could be… 100)
    Print “Fizz” if an integer is divisible by 3
    Print “Buzz” if an integer is divisible by 5
    And print “FizzBuzz” if an integer is divisible by both 3 and 5.

This would go something like, given the number 15, it would return:
    1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz.
*/

const FizzBuzz = (N, Fizz, Buzz) => {
  const arr = [];
  for (let i = 1; i <= N; i++) {
    arr.push(i);
    // replacearr[arr.length - 1] by “Fizz” if an integer is divisible by Fizz
    if ((i % Fizz) === 0  && (i % Buzz) !== 0) arr[arr.length - 1] = 'Fizz';
    // replacearr[arr.length - 1] by “Fizz” if an integer is divisible by Fizz and Buzz
    if ((i % Fizz) === 0  && (i % Buzz) === 0) arr[arr.length - 1] = 'FizzBuzz';
    // replacearr[arr.length - 1] by “Fizz” if an integer is divisible by Buzz
    if ((i % Fizz) !== 0  && (i % Buzz) === 0) arr[arr.length - 1] = 'Buzz';
  }
  return arr;
}

module.exports = FizzBuzz;