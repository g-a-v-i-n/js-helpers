// Strings


const toString = a => a.toString()

const charAt = s => i => s.charAt(i)

const charCodeAt = s => i => s.charCodeAt(i)

const codePointAt = s => i => s.codePointAt(i)

//TODO: test this
const stringConcat = s => (...args) => s.concat(s, [...args])

const endsWith = s => test => s.endsWith(test)

const stringIncludes = s => test => s.includes(test)

const upperCase = s => s.toUpperCase()

const lowerCase = s => s.toLowerCase()

const split = s => delimiter => s.split(delimiter)
