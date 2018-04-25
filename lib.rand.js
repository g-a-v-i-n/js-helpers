// return a random num from 0 to max
const randInt = max => Math.floor(Math.random() * Math.floor(max))
// generate an array representing bits
const randBinaryArr = bits => sequence(bits).map(() => randInt(2))
