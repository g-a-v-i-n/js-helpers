/**
 * Takes a value and a range from l1 to h1 and maps the value to a range from l2 to h2
 * @param  {Number} v  The value to be remapped
 * @param  {Number} l1 Low value of starting range
 * @param  {Number} h1 High value of starting range
 * @param  {Number} l2 Low value of ending range
 * @param  {Number} h2 High value of ending range
 * @return {Number}    The remapped value
 */
const mapToRange = (
  v:number,
  l1:number,
  h1:number,
  l2:number, 
  h2:number
) => l2 + (h2 - l2) * (v - l1) / (h1 - l1);
export default mapToRange;
