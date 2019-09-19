/**
 * Takes an array of numbers and returns the average.
 * @param  {Array of Numbers}   arr   An array of numbers to average
 * @return {Number}                   The average
 */
const average = arr => arr.reduce((acc,b) => acc + b, 0) / arr.length;
export default average;
