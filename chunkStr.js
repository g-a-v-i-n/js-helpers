/**
 * Breaks a string into equal parts.
 * @param  {String}       str     A string to chunk
 * @param  {Integer}      size    The chunk size
 * @return {Array of Strings}     The chunked string
 */
const chunkStr = (str, size) => {
  const r = new RegExp(`.{1,${size}}`, 'g');
  return str.match(r);
}
export default chunkStr
