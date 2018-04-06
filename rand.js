const randInt = max => Math.floor(Math.random() * Math.floor(max))
const randBinaryArr = bits => [...Array(bits)].map(() => randInt(2))
