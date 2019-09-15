const chunkStr = (str, size) => {
  const r = new RegExp('/.{1,' + size + '}/g');
  return str.match(r);
}
export default chunkStr
