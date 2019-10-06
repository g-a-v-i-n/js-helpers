/**
 * Calculates the median value of an array of numbers.
 * @param  {Array} numbers
 * @return {Number}
 */
const median = (arr:Array<number>) => {
  const middle = (arr.length + 1) / 2;
  const sorted = [...arr].sort((a, b) => a - b); // avoid mutating when sorting
  const isEven = sorted.length % 2 == 0;
  return isEven ? (sorted[middle - 1.5] + sorted[middle - 0.5]) / 2 : sorted[middle - 1];
}
