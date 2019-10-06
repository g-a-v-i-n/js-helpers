/**
 * Generates an array of a given length, with indexes.
 * @param  {Number} num The length of the array
 * @return {Array of Numbers}     The array
 */
const sequence = (num:number) => Array.from(Array(num), (_, i) => i);
export default sequence;
