/**
 * Accepts an object and copies it with no old references to the original.
 * @param  {Any} v the value to be copied. Anything that can be valid JSON
 * @return {Any}  the copied value
 */
const deepClone = (v:any) => JSON.parse(JSON.stringify(v));
export default deepClone
