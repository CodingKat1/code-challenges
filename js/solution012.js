// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9.

const squareSum = numbers => numbers.reduce((sum,curr)=> Math.pow(curr,2) + sum ,0)

// Must put '0' as initial value to avoid invalid cases where an array is empty