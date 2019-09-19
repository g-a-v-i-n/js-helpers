/**
 * Removes duplicate elements from array
 * @param  {Array} a
 * @return {Array}
 */
const removeDuplicates = (a) => [...new Set(a)]
export default removeDuplicates
