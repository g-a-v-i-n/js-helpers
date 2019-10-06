/**
 * Removes duplicate elements from array
 * @param  {Array} a
 * @return {Array}
 */
const removeDuplicates = (a:Array<any>) => [...new Set(a)]
export default removeDuplicates
