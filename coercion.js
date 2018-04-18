// stringBar string to binary array
// input: '0101'
// output:  [0, 1, 0, 1]
const stringBar = s => split(s)('').map(a => parseInt(a, 10))

// barString  binary array to string
// input: [0, 1, 0, 1]
// output: '0101'
const barString = arr => join(arr)('')

// outputs methods for any bitlength base conversion
// TODO fix int -> string
const { binDec, binHex, decBin, decHex, hexBin, hexDec } = thread({
  binDec: [2, 10],
  binHex: [2, 16],
  decBin: [10, 2],
  decHex: [10, 16],
  hexBin: [16, 2],
  hexDec: [16, 10],
})(bases => {
  const conversion = s => parseInt(s, bases[0]).toString(bases[1])
  return s => s.length < 32
    ? conversion(s)
    : s.match(/.{1,32}/g).map(conversion).join('')
})
